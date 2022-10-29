import { createClient } from '@supabase/supabase-js';

const client = createClient(
	process.env.SUPABASE_PROJECT_URL as string,
	process.env.SUPABASE_PUBLIC_API_KEY as string,
);

export default client;