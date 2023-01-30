<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CardPost from '../ui/CardPost.svelte';
	import viewport from './infiniteScroll';
	import { fade } from 'svelte/transition';

	export let data: ({
		content: string;
		created_at: string;
		email: string;
		id: number;
		title: string;
	} & { likes: { likes: number } | { likes: number }[] | null })[];
	export let noMoreData: boolean;
	export let loading = false;

	const dispatch = createEventDispatcher();
</script>

<ul class="mx-auto w-full grid-cols-1 items-center gap-5 md:grid md:grid-cols-2">
	{#each data as item}
		<CardPost {...item} />
	{/each}
</ul>
<div transition:fade>
	{#if !noMoreData}
		<div use:viewport on:enterViewport={() => dispatch('loadMore')}>
			{#if loading}
				<p>Loading...</p>
			{/if}
		</div>
	{:else}
		<p>没有更多啦</p>
	{/if}
</div>
