<script lang="ts">
	import { page } from '$app/stores';
	import { supabase } from '$lib/supabaseClient';
	import Time from 'svelte-time/src/Time.svelte';
	import { fly } from 'svelte/transition';

	export let id: number, email: string, title: string, likes, created_at: string;

	let postLike: number,
		user = $page.data.session && $page.data.session.user;

	if (likes === null) {
		postLike = 0;
		async function createLike() {
			const { error } = await supabase.from('likes').insert({ likes: postLike, id: id });
			if (error) throw new Error(error.message);
		}
		createLike();
	} else {
		postLike = likes.likes;
	}

	function addLike() {
		if (!user) {
			alert('登录才能点赞哦😯');
			return;
		}
		async function addLike() {
			const { error } = await supabase.from('likes').update({ likes: postLike }).eq('id', id);
			if (error) throw new Error(error.message);
		}
		postLike += 1;
		addLike();
	}
</script>

<div
	in:fly={{ y: -50, duration: 500 }}
	class="mb-5 flex rounded-sm bg-secondary text-secondary-content shadow-xl transition-all duration-300 hover:rounded-3xl hover:bg-secondary-focus hover:text-secondary-content"
>
	<div class="card-body">
		<div class="flex flex-col gap-1">
			<div class="text-2xl font-bold">{title}</div>
			<div class="badge">作者: {email}</div>
			<div class="badge-primary badge">
				创建： <Time relative class="text-xs " timestamp={created_at} />
			</div>
		</div>
		<div class="card-actions mt-10 justify-between">
			<button class="btn-primary btn" on:click={addLike}>
				{postLike}赞❤️
			</button>
			<a class="btn-primary btn" href="community/post/{id}">
				{#if email === $page.data?.session?.user.email}阅读自己的文章{:else}阅读文章{/if}
			</a>
		</div>
	</div>
</div>
