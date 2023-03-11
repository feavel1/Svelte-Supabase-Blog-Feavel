import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import type { LayoutLoad } from './$types';
import type { Database } from '../lib/supabase';

export const load: LayoutLoad = async ({ fetch, data, depends, url }) => {
	// depends('supabase:auth');

	// const supabase = createSupabaseLoadClient<Database>({
	// 	supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
	// 	supabaseKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
	// 	event: { fetch },
	// 	serverSession: data.session
	// });

	// const {
	// 	data: { session }
	// } = await supabase.auth.getSession();

	return {
		// supabase,
		// session,
		url
	};
};
