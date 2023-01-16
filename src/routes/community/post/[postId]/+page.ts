import { supabase } from '$lib/supabaseClient';

// @ts-ignore
export const load = async ({ params }) => {
	async function fetchPost(postId: Number) {
		let { data, error } = await supabase
			.from('posts')
			.select('*')
			.filter('id', 'eq', postId)
			.single();
		if (error) throw new Error(error.message);
		return data;
	}

	async function fetchLikes(postId: Number) {
		let { count, error } = await supabase
			.from('likes')
			.select('id', { count: 'estimated', head: true })
			.eq('post', postId);
		if (error) throw new Error(error.message);
		return count;
	}

	async function fetchComments(postId: Number) {
		let { data, error } = await supabase.from('comments').select('*').eq('post', postId);
		if (error) throw new Error(error.message);
		return data;
	}

	return {
		post: fetchPost(params.postId),
		likes: fetchLikes(params.postId),
		comments: fetchComments(params.postId)
	};
};
