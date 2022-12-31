<script>
	import BackTo from '../../../src/components/ui/BackTo.svelte';
</script>

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
			<div class="card-body">
				<div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text">邮箱📮</span>
					</label>
					<input type="text" placeholder="email" class="input-bordered input" />
				</div>

				<div class="form-control mt-6">
					<button class="btn-primary btn">发送秘密链接🔗</button>
				</div>
			</div>
		</div>
	</div>
</div>
