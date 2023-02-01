<script lang="ts">
	import List from '$lib/components/scripts/List.svelte';
	import data from '$lib/components/scripts/fetchPostsData';
</script>

<svelte:head>
	<title>社区 - Feavel's Camp</title>
	<meta name="description" content="Community" />
</svelte:head>

<div class="flex w-full max-w-3xl flex-col gap-3">
	<h1 class="text-6xl">欢迎用户来到社区📌🗂️</h1>

	<div class="divider" />

	<div
		class="flex rounded-sm bg-base-200 shadow-xl transition-all duration-300 hover:rounded-xl hover:bg-base-300"
	>
		<div class="card-body">
			<h2 class="card-title">社区指南 v2.0🧭</h2>
			<div class="badge-info badge">New!</div>
			<p>查看社区发布的新规则。</p>
			<div class="card-actions justify-end">
				<a href="/community/guide"> <button class="btn-accent btn">查看指南</button></a>
			</div>
		</div>
	</div>

	<h2 class="mt-10 text-3xl">用户创建的帖子：</h2>

	<List {...$data} on:loadMore={data.fetchMore} />
</div>
