<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import { invalidate } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient';
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

<NavigationBar key={data.url}>
	<slot />
</NavigationBar>
