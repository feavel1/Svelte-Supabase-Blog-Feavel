<script lang="ts">
	import List from '$lib/components/scripts/List.svelte';
	import data from '$lib/components/scripts/fetchPostsData';
</script>

<List {...$data} on:loadMore={data.fetchMore} />
