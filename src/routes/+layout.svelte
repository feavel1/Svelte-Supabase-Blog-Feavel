<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import { supabase } from '$lib/supabaseClient';
	import { invalidate } from '$app/navigation';
	import PageTransition from '$lib/components/ui/PageTransition.svelte';
	import Footer from '$lib/components/ui/Footer.svelte';
	import NavigationBar from '$lib/components/layouts/NavigationBar.svelte';

	export let data: PageData;

	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});
		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<NavigationBar>
	<PageTransition key={data.url}>
		<div class="mt-28  min-h-screen px-6 pb-16 xl:px-2">
			<div class="flex justify-center">
				<slot />
			</div>
		</div>
		<Footer />
	</PageTransition>
</NavigationBar>
