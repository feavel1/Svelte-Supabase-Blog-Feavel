<script lang="ts">
	import { onMount } from 'svelte';
	import type { AuthSession } from '@supabase/supabase-js';
	import { supabase } from '$lib/supabaseClient';

	export let session: AuthSession;

	let loading = false;
	let username: string | null = null;
	let website: string | null = null;
	let avatarUrl: string | null = null;

	onMount(() => {
		getProfile();
	});

	const getProfile = async () => {
		try {
			loading = true;
			const { user } = session;

			const { data, error, status } = await supabase
				.from('profiles')
				.select(`username, website, avatar_url`)
				.eq('id', user.id)
				.single();

			if (data) {
				username = data.username;
				website = data.website;
				avatarUrl = data.avatar_url;
			}

			if (error && status !== 406) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};

	async function updateProfile() {
		try {
			loading = true;
			const { user } = session;

			const updates = {
				id: user.id,
				username,
				website,
				avatar_url: avatarUrl,
				updated_at: new Date()
			};

			let { error } = await supabase.from('profiles').upsert(updates);

			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	}

	async function signOut() {
		try {
			loading = true;
			let { error } = await supabase.auth.signOut();
			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	}
</script>

<form class="form-control w-full max-w-xs" on:submit|preventDefault={updateProfile}>
	<div>
		<label class="label" for="email">Email</label>
		<input
			class="input-bordered input w-full max-w-xs"
			id="email"
			type="text"
			value={session.user.email}
			disabled
		/>
	</div>
	<div>
		<label class="label" for="username">名字</label>
		<input
			class="input-bordered input w-full max-w-xs"
			id="username"
			type="text"
			bind:value={username}
		/>
	</div>
	<div>
		<label class="label" for="website">用户网址</label>
		<input
			class="input-bordered input w-full max-w-xs"
			id="website"
			type="website"
			bind:value={website}
		/>
	</div>

	<div class="mt-4 flex justify-between">
		<input
			type="submit"
			class="btn-primary btn"
			value={loading ? '加载中...' : '更新信息'}
			disabled={loading}
		/>
		<button class="btn-secondary btn" on:click={signOut} disabled={loading}>退出登录</button>
	</div>
</form>
