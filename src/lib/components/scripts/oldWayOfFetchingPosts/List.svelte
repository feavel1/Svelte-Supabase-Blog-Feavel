<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CardPost from '$lib/components/ui/CardPost.svelte';
	import viewport from './infiniteScroll';
	import { fade } from 'svelte/transition';

	export let data;
	export let noMoreData: boolean;
	export let loading = false;

	const dispatch = createEventDispatcher();
</script>

<div class="mx-auto w-full grid-cols-1 items-center gap-5 md:grid md:grid-cols-2">
	{#each data as item}
		<CardPost {...item} />
	{/each}
</div>
<div transition:fade>
	{#if !noMoreData}
		<div use:viewport on:enterViewport={() => dispatch('loadMore')}>
			{#if loading}
				<p>加载中，请稍后...</p>
			{/if}
		</div>
	{:else}
		<p>没有更多啦</p>
	{/if}
</div>
