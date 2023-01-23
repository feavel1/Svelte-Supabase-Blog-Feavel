// import { supabase } from '$lib/supabaseClient';
// import type { PageLoad } from './$types';

// export const load = (async () => {
// 	async function countPost() {
// 		let { count, error } = await supabase
// 			.from('posts')
// 			.select('*', { count: 'exact', head: true })

// 			.single();
// 		if (error) throw new Error(error.message);
// 		return count;
// 	}

// 	return {
// 		countPosts: countPost()
// 	};
// }) satisfies PageLoad;
