-- Add comments column to existing waitlist table
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS comments text;

-- Verify the column was added
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'waitlist' 
ORDER BY ordinal_position; 