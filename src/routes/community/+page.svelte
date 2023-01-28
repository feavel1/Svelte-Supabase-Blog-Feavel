<script>
	import List from '$lib/components/scripts/List.svelte';
	import data from '$lib/components/scripts/fetchPostsData';
</script>

<List {...$data} key="id" on:loadMore={data.fetchMore} />
