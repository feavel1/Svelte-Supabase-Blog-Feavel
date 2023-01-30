import type { LayoutServerLoad } from './$types';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export const load: LayoutServerLoad = async (event) => {
	const { url } = event;
	return {
		session: await getServerSession(event),
		url: url.pathname
	};
};
