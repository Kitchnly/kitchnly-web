import 'server-only';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

type SellerWaitlistInsert = {
  name: string;
  email: string;
  phone: string | null;
  city: string;
  province: string;
  hear_about_us: string;
  cuisines: string[];
  cuisine_other: string | null;
  monthly_wtp: string;
  notes: string | null;
  source?: string | null;
  user_agent?: string | null;
};

type SellerWaitlistRow = SellerWaitlistInsert & {
  id: string;
  source: string | null;
  created_at: string;
};

export type Database = {
  public: {
    Tables: {
      seller_waitlist: {
        Row: SellerWaitlistRow;
        Insert: SellerWaitlistInsert;
        Update: Partial<SellerWaitlistInsert>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
};

let cached: SupabaseClient<Database> | null = null;

export function getSupabaseAdmin(): SupabaseClient<Database> {
  if (cached) return cached;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      'Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY for the admin client.'
    );
  }

  cached = createClient<Database>(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}
