<script>
	import { createEventDispatcher } from 'svelte';
	import CardPost from '../ui/CardPost.svelte';
	import viewport from './infiniteScroll';
	export let data;
	export let noMoreData;
	export let loading = false;
	export let key;
	const dispatch = createEventDispatcher();
</script>

<ul class="grid-cols-1 gap-5 md:grid md:grid-cols-2">
	{#each data as item}
		<li>
			<CardPost {...item} />
		</li>
	{/each}

	{#if !noMoreData}
		<li use:viewport on:enterViewport={() => dispatch('loadMore')}>
			{#if loading}
				Loading...
			{/if}
		</li>
	{/if}
</ul>
