import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';
import { compile } from 'mdsvex';
import highlighter from '$lib/components/scripts/codeHighliter.mjs';

export const load = (async ({ params }) => {
	// Fetch the post
	async function fetchPost(postId: String) {
		const { data: post, error: postError } = await supabase
			.from('posts')
			.select('*')
			.filter('id', 'eq', postId)
			.single();
		if (postError) {
			console.log(postError);
		}
		const mdsvexOptions = {
			highlight: {
				highlighter: String
			}
		};
		(async () => {
			const { code }: any = await compile(post!.content, mdsvexOptions);
			post!.content = code;
		})();
		return post;
	}

	// Fetch the comments for the post
	async function fetchComments(postId: String) {
		const { data: comments, error: commentsError } = await supabase
			.from('comments')
			.select(`content, created_at, email, id, comment_likes (user_id)`)
			.order('created_at', { ascending: false })
			.eq('post_id', postId);
		if (commentsError) {
			console.log(commentsError);
		}

		return comments;
	}

	// Return the data and errors
	return {
		post: fetchPost(params.postId),
		comments: fetchComments(params.postId)
	};
}) satisfies PageServerLoad;
