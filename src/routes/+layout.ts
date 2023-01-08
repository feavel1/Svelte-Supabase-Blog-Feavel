// @ts-nocheck

import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load = ({ url }) => {
	return { url: url.pathname, loadMe };
};

const loadMe: LayoutLoad = async (event) => {
	const { session } = await getSupabase(event);
	return { session };
};
