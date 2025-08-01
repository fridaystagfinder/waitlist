-- Temporarily disable RLS on waitlist_new table to fix form submission
ALTER TABLE waitlist_new DISABLE ROW LEVEL SECURITY;

-- Verify RLS is disabled
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'waitlist_new'; 