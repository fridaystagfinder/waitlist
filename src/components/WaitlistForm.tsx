import React, { useState } from 'react';
import { Mail, User, Phone, MapPin, MessageSquare, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface WaitlistFormProps {
  onSuccess: (name: string) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  customCity: string;
  comments: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  city?: string;
  consent?: string;
}

const predefinedCities = [
  'Hyderabad',
  'Bengaluru',
  'Delhi',
  'Mumbai',
  'Chennai',
  'Kolkata',
  'Pune',
  'Ahmedabad',
  'Jaipur',
  'Other'
];

// --- START: HARDCODED SUPABASE VALUES ---
const supabaseUrl = 'https://gntvbngvllfinnympena.supabase.co';
const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdudHZibmd2bGxmaW5ueW1wZW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxOTk1MjcsImV4cCI6MjA2ODc3NTUyN30.ZgZWtoDFnGgVZHdxFa5R5OcC855mRjTZbQ7Ha4av8sY';
// --- END ---

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    customCity: '',
    comments: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.city) {
      newErrors.city = 'City is required';
    } else if (formData.city === 'Other' && !formData.customCity.trim()) {
      newErrors.city = 'Please specify your city';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must accept the privacy policy to continue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${supabaseUrl}/functions/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${anonKey}`,
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim() || undefined,
          city: formData.city === 'Other' ? formData.customCity.trim() : formData.city,
          comments: formData.comments.trim() || undefined,
          consent_given: formData.consent,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        onSuccess(formData.name.trim());
      } else {
        setSubmitError(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
    setSubmitError('');
  };

  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="glass-card p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="section-title mb-4">
              Who's joining us?
            </h2>
            {/* ...UI BELOW HERE UNTOUCHED... */}
            {/* (copy your existing JSX here as-is) */}
          </div>
          {/* ...rest of form UI stays unchanged... */}
        </div>
      </div>
    </section>
  );
}