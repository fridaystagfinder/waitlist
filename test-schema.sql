-- Test to check current waitlist table schema
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'waitlist' 
ORDER BY ordinal_position;

-- Also check if comments column exists
SELECT EXISTS (
  SELECT 1 
  FROM information_schema.columns 
  WHERE table_name = 'waitlist' 
  AND column_name = 'comments'
) as comments_exists; 