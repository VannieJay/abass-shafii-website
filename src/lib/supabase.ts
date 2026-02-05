import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://hcxgososknlvpevrxpxk.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjdmZWE5YTU4LTAyOTktNDU4ZS1iYmFkLTUzZDdhOGE3N2IxNSJ9.eyJwcm9qZWN0SWQiOiJoY3hnb3Nvc2tubHZwZXZyeHB4ayIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzcwMjA4MDIxLCJleHAiOjIwODU1NjgwMjEsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.UC2XfrqvYK2KyyS06hQp5DW87F8CC3Aa2mW-hqVBa90';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };