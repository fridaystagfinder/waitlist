-- Create a completely new waitlist table to avoid caching issues
CREATE TABLE IF NOT EXISTS waitlist_new (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  phone text,
  city text NOT NULL,
  comments text,
  brevo_synced boolean DEFAULT false,
  consent_given boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on the new table
ALTER TABLE waitlist_new ENABLE ROW LEVEL SECURITY;

-- Add policy for inserting new waitlist entries
CREATE POLICY "Anyone can join waitlist new"
  ON waitlist_new
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS waitlist_new_email_idx ON waitlist_new(email);
CREATE INDEX IF NOT EXISTS waitlist_new_created_at_idx ON waitlist_new(created_at DESC);
CREATE INDEX IF NOT EXISTS waitlist_new_city_idx ON waitlist_new(city);

-- Verify the new table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'waitlist_new' 
ORDER BY ordinal_position; 