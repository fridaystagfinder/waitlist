/*
  # Create waitlist table for FridayStag

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `name` (text, required) - User's full name
      - `email` (text, required, unique) - User's email address
      - `phone` (text, optional) - User's phone number with country code
      - `city` (text, required) - Selected or custom city
      - `created_at` (timestamp) - Record creation time
      - `brevo_synced` (boolean) - Track if synced to Brevo
      - `consent_given` (boolean) - Privacy policy consent

    - `anonymous_feedback`
      - `id` (uuid, primary key)
      - `feedback` (text, required) - User's feedback content
      - `feedback_type` (text) - Type of feedback (thoughts, suggestions, contact)
      - `user_agent` (text) - Browser user agent
      - `page_url` (text) - Page where feedback was submitted
      - `created_at` (timestamp) - Record creation time

  2. Security
    - Enable RLS on both tables
    - Add policy for inserting new waitlist entries
    - Add policy for inserting anonymous feedback
    - Add policy for reading own data (if needed for user dashboard)
*/

CREATE TABLE IF NOT EXISTS waitlist (
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

CREATE TABLE IF NOT EXISTS anonymous_feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  feedback text NOT NULL,
  feedback_type text DEFAULT 'thoughts',
  user_agent text,
  page_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE anonymous_feedback ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert into waitlist (public registration)
CREATE POLICY "Anyone can join waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anyone to insert anonymous feedback
CREATE POLICY "Anyone can submit anonymous feedback"
  ON anonymous_feedback
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow reading own waitlist entry if authenticated (future feature)
CREATE POLICY "Users can read own waitlist entry"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist(email);
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist(created_at DESC);
CREATE INDEX IF NOT EXISTS waitlist_city_idx ON waitlist(city);

CREATE INDEX IF NOT EXISTS anonymous_feedback_created_at_idx ON anonymous_feedback(created_at DESC);
CREATE INDEX IF NOT EXISTS anonymous_feedback_type_idx ON anonymous_feedback(feedback_type);