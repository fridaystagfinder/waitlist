-- Fix RLS policy for waitlist_new table
-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Anyone can join waitlist new" ON waitlist_new;

-- Create a new, more permissive policy
CREATE POLICY "Allow anonymous inserts to waitlist_new"
  ON waitlist_new
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Also allow authenticated users to insert
CREATE POLICY "Allow authenticated inserts to waitlist_new"
  ON waitlist_new
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Verify the policies exist
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'waitlist_new'; 