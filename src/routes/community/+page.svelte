<script>
	import CardPost from '../../components/ui/CardPost.svelte';
</script>

<svelte:head>
	<title>社区 - Feavel's Camp</title>
	<meta name="description" content="Community" />
</svelte:head>

<div class="flex flex-col gap-3">
	<h1 class="text-6xl">欢迎来到社区📌🗂️</h1>

	<div class="divider" />

	<h2 class="text-3xl">用户创建的帖子：</h2>

	<div class="flex flex-col content-center justify-center gap-3 md:grid md:grid-cols-2">
		<CardPost>
			<div class="card-body">
				<h2 class="card-title">音乐是没有意义的</h2>
				<p>音乐是全世界最...</p>

				<div class="card-actions mt-10 justify-between">
					<button class="btn-primary btn">0个赞❤️</button>
					<button class="btn-primary btn">添加评论💬</button>
				</div>
				<div class="mt-10">
					<div>
						用户「邮箱名」说：
						<div class="rounded-lg bg-neutral p-2 text-neutral-content">评论</div>
					</div>
				</div>
			</div>
		</CardPost>
		<CardPost>
			<div class="card-body">
				<h2 class="card-title">第二个帖子</h2>
				<p>帖子内容...</p>
				<div class="card-actions justify-between">
					<button class="btn-primary btn">x个赞</button>
					<button class="btn-primary btn">评论</button>
				</div>
				<div class="mt-10">
					用户「邮箱名」说：
					<div class="rounded-lg bg-neutral p-2 text-neutral-content">评论</div>
				</div>
			</div>
		</CardPost>
		<CardPost>
			<div class="card-body">
				<h2 class="card-title">第二个帖子</h2>
				<p>帖子内容...</p>
				<div class="card-actions justify-between">
					<button class="btn-primary btn">x个赞</button>
					<button class="btn-primary btn">评论</button>
				</div>
				<div class="mt-10">
					用户「邮箱名」说：
					<div class="rounded-lg bg-neutral p-2 text-neutral-content">评论</div>
				</div>
			</div>
		</CardPost>
		<CardPost>
			<div class="card-body">
				<h2 class="card-title">第二个帖子</h2>
				<p>帖子内容...</p>
				<div class="card-actions justify-between">
					<button class="btn-primary btn">x个赞</button>
					<button class="btn-primary btn">评论</button>
				</div>
				<div class="mt-10">
					用户「邮箱名」说：
					<div class="rounded-lg bg-neutral p-2 text-neutral-content">评论</div>
				</div>
			</div>
		</CardPost>
		<CardPost>
			<div class="card-body">
				<h2 class="card-title">第二个帖子</h2>
				<p>帖子内容...</p>
				<div class="card-actions justify-between">
					<button class="btn-primary btn">x个赞</button>
					<button class="btn-primary btn">评论</button>
				</div>
				<div class="mt-10">
					用户「邮箱名」说：
					<div class="rounded-lg bg-neutral p-2 text-neutral-content">评论</div>
				</div>
			</div>
		</CardPost>
		<CardPost>
			<div class="card-body">
				<h2 class="card-title">第二个帖子</h2>
				<p>帖子内容...</p>
				<div class="card-actions justify-between">
					<button class="btn-primary btn">x个赞</button>
					<button class="btn-primary btn">评论</button>
				</div>
				<div class="mt-10">
					用户「邮箱名」说：
					<div class="rounded-lg bg-neutral p-2 text-neutral-content">评论</div>
				</div>
			</div>
		</CardPost>
		<CardPost>
			<div class="card-body">
				<h2 class="card-title">第二个帖子</h2>
				<p>帖子内容...</p>
				<div class="card-actions justify-between">
					<button class="btn-primary btn">x个赞</button>
					<button class="btn-primary btn">评论</button>
				</div>
				<div class="mt-10">
					用户「邮箱名」说：
					<div class="rounded-lg bg-neutral p-2 text-neutral-content">评论</div>
				</div>
			</div>
		</CardPost>
		<CardPost>
			<div class="card-body">
				<h2 class="card-title">第二个帖子</h2>
				<p>帖子内容...</p>
				<div class="card-actions justify-between">
					<button class="btn-primary btn">x个赞</button>
					<button class="btn-primary btn">评论</button>
				</div>
				<div class="mt-10">
					用户「邮箱名」说：
					<div class="rounded-lg bg-neutral p-2 text-neutral-content">评论</div>
				</div>
			</div>
		</CardPost>
	</div>
</div>
