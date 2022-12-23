<script>
	import '../app.css';
</script>

<main class="flex min-h-screen flex-col">
	<header class="shadow">
		<nav class="mx-auto flex items-center justify-between px-14 py-5 align-middle text-2xl">
			<div class="flex w-1/3 justify-start gap-5">
				<a href="/">Home</a>
				<a href="/learn">Learn</a>
				<a href="/community">Community</a>
			</div>

			<div class="flex w-1/3 justify-end">
				<div>
					<a href="/my-account"> My account </a>
				</div>
			</div>
		</nav>
	</header>

	<slot />
</main>
