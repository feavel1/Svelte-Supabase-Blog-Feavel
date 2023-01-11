// @ts-nocheck

import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load: LayoutLoad = async (event) => {
	const { session } = await getSupabase(event);
	const { url } = event;
	return { session, url: url.pathname };
};
