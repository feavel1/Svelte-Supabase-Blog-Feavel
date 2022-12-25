<script>
	import '../app.css';
</script>

<header
	class="fixed left-0 top-0 right-0 flex h-16 items-center justify-between px-10 align-middle text-2xl shadow"
>
	<div class="flex w-1/3 justify-start gap-6">
		<a href="/home">Home</a>
		<a href="/learn">Learn</a>
		<a href="/community">Community</a>
	</div>

	<div class="flex w-1/3 justify-end">
		<a href="/my-account">My account</a>
	</div>
</header>

<div class="mt-16">
	<slot />
</div>
