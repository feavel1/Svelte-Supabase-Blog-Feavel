<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CardPost from '../ui/CardPost.svelte';
	import viewport from './infiniteScroll';
	export let data: ({
		content: string;
		created_at: string;
		email: string;
		id: number;
		post_creator_id: string;
		title: string;
	} & { likes: { likes: number } | { likes: number }[] | null })[];
	export let noMoreData: boolean;
	export let loading = false;
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
