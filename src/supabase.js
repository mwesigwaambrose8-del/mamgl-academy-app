
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jdtinwmkkumktuqrllgl.supabase.co";

const supabaseAnonKey = "YOUR_SUPABASE_PUBLISHABLE_KEY";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
