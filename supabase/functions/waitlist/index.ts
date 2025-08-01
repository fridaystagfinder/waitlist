import { corsHeaders } from '../_shared/cors.ts'

interface WaitlistRequest {
  name: string;
  email: string;
  phone?: string;
  city: string;
  comments?: string;
  consent_given: boolean;
}

interface BrevoContact {
  email: string;
  attributes: {
    FIRSTNAME: string;
    PHONE?: string;
    CITY: string;
  };
  listIds: number[];
}

const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY');
const BREVO_LIST_ID = 1; // Default list ID - update based on your Brevo setup

Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const requestData: WaitlistRequest = await req.json();
    
    // Validate required fields
    if (!requestData.name || !requestData.email || !requestData.city || !requestData.consent_given) {
      return new Response(JSON.stringify({ 
        error: 'Missing required fields: name, email, city, and consent are required' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(requestData.email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Initialize Supabase client (schema cache fix)
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/public.waitlist_new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseServiceKey}`,
        'apikey': supabaseServiceKey,
        'Prefer': 'return=representation',
      },
      body: JSON.stringify({
        name: requestData.name,
        email: requestData.email.toLowerCase(),
        phone: requestData.phone || null,
        city: requestData.city,
        comments: requestData.comments || null,
        consent_given: requestData.consent_given,
      }),
    });

    if (!supabaseResponse.ok) {
      const errorData = await supabaseResponse.json();
      console.error('Supabase error:', errorData);
      console.error('Request body sent:', JSON.stringify({
        name: requestData.name,
        email: requestData.email.toLowerCase(),
        phone: requestData.phone || null,
        city: requestData.city,
        comments: requestData.comments || null,
        consent_given: requestData.consent_given,
      }));
      
      // Handle duplicate email
      if (errorData.code === '23505') {
        return new Response(JSON.stringify({ 
          error: 'Email already registered. You\'re already on our waitlist!' 
        }), {
          status: 409,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      throw new Error('Failed to save to database');
    }

    const waitlistEntry = await supabaseResponse.json();

    // Sync with Brevo (if API key is configured)
    let brevoSynced = false;
    if (BREVO_API_KEY) {
      try {
        const brevoContact: BrevoContact = {
          email: requestData.email.toLowerCase(),
          attributes: {
            FIRSTNAME: requestData.name.split(' ')[0],
            CITY: requestData.city,
          },
          listIds: [BREVO_LIST_ID],
        };

        if (requestData.phone) {
          brevoContact.attributes.PHONE = requestData.phone;
        }

        const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': BREVO_API_KEY,
          },
          body: JSON.stringify(brevoContact),
        });

        if (brevoResponse.ok) {
          brevoSynced = true;
          console.log('Successfully synced to Brevo');
        } else {
          const brevoError = await brevoResponse.json();
          console.error('Brevo sync error:', brevoError);
        }
      } catch (brevoError) {
        console.error('Brevo sync failed:', brevoError);
      }
    }

    // Update Supabase record with Brevo sync status
    if (brevoSynced) {
      await fetch(`${supabaseUrl}/rest/v1/public.waitlist_new?id=eq.${waitlistEntry[0].id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'apikey': supabaseServiceKey,
        },
        body: JSON.stringify({ brevo_synced: true }),
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Successfully joined the waitlist!',
      data: {
        id: waitlistEntry[0].id,
        name: waitlistEntry[0].name,
        email: waitlistEntry[0].email,
        brevo_synced: brevoSynced,
      },
    }), {
      status: 201,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Waitlist API error:', error);
    return new Response(JSON.stringify({
      error: 'Internal server error. Please try again later.',
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});