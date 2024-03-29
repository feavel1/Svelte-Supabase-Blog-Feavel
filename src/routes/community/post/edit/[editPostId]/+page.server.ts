import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	async function fetchPost(postId: String) {
		let { data, error } = await supabase
			.from('posts')
			.select('*')
			.filter('id', 'eq', postId)
			.single();
		if (error) throw new Error(error.message);
		return data;
	}

	async function fetchComments(postId: String) {
		let { data, error } = await supabase.from('comments').select('*').eq('post_id', postId);
		if (error) throw new Error(error.message);
		return data;
	}

	return {
		post: fetchPost(params.editPostId),
		comments: fetchComments(params.editPostId)
	};
}) satisfies PageServerLoad;
