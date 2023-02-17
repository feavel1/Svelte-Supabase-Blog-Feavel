<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';
	import { writable } from 'svelte/store';

	export let comment: any;
	export let user: any;

	let likedByUser = false;

	const count = writable(comment.comment_likes.length);

	const updateLikeStatus = async () => {
		if (!user) {
			return;
		}
		const { data } = await supabase
			.from('comment_likes')
			.select('*')
			.eq('comment_id', comment.id)
			.eq('user_id', user.id);
		count.set(comment.comment_likes.length);
		if (data?.length !== 0) {
			likedByUser = true;
		}
	};

	onMount(updateLikeStatus);

	const toggleLike = async () => {
		if (!user) {
			alert('登录才能点赞哦😯');
			return;
		}

		if (likedByUser) {
			// Unlike the comment
			const { error } = await supabase
				.from('comment_likes')
				.delete()
				.eq('comment_id', comment.id)
				.eq('user_id', user.id);
			count.update((n) => n - 1);
			if (error) {
				console.error(error);
				return;
			}
			likedByUser = false;
		} else {
			// Like the comment
			const { error } = await supabase
				.from('comment_likes')
				.insert({ comment_id: comment.id, user_id: user.id })
				.single();
			count.update((n) => n + 1);
			if (error) {
				console.error(error);
				return;
			}
			likedByUser = true;
		}
	};

	let countValue: number;
	count.subscribe((value) => {
		countValue = value;
	});
</script>

<button
	class=" {likedByUser ? 'bg-red-500' : 'bg-gray-300'} rounded-lg px-2 py-1 text-white"
	on:click={toggleLike}
>
	{countValue}个{likedByUser ? '❤️' : '🤍'}
</button>
