import { createClient } from "@supabase/supabase-js";
//Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://apapeqwkkgkjqgrnnehb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwYXBlcXdra2dranFncm5uZWhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3MDEwODIsImV4cCI6MjAyOTI3NzA4Mn0.yGfnnInI7W12I0ZAKgpHXNM0lVaa3M_kyAiD7SrfWDw"
);
export { supabase };
