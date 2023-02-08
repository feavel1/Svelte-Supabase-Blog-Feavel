<script lang="ts">
	import BackTo from '../BackTo.svelte';
	import { supabase } from '$lib/supabaseClient';

	let loading = false;
	let emailToVerify: string;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signInWithOtp({ email: emailToVerify });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<div class="h-screen">
	<div class="mt-28 max-w-3xl rounded-sm bg-secondary p-5">
		<BackTo />
		<div class="hero-content flex-col lg:flex-row-reverse">
			<div class="text-center lg:text-left">
				<h1 class="text-5xl font-bold">登录账号</h1>
				<p class="py-6">
					我们不收集任何用户信息，也不会私自使用任何信息。只有在您联系我们，我们才会联系你。请放松登录🫶
				</p>
			</div>
			<div class="content-card w-full max-w-sm flex-shrink-0 rounded-sm bg-base-300 shadow-2xl ">
				<form class="card-body" on:submit|preventDefault={handleLogin}>
					<div class="form-control">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span class="label-text">邮箱📮</span>
						</label>
						<input
							type="text"
							placeholder="email"
							class="input-bordered input"
							bind:value={emailToVerify}
						/>
					</div>

					<div class="form-control mt-6">
						<input
							type="submit"
							class="btn-primary btn"
							value={loading ? 'Loading' : '发送秘密链接🔗'}
							disabled={loading}
						/>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
