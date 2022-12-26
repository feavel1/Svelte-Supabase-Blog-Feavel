<script>
	import BackTo from '../../../src/components/ui/BackTo.svelte';
</script>

<div class="mt-28 max-w-3xl">
	<BackTo />
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Login now!</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
		</div>
		<div class="content-card w-full max-w-sm flex-shrink-0 bg-base-300 shadow-2xl ">
			<div class="card-body">
				<div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text">Email</span>
					</label>
					<input type="text" placeholder="email" class="input-bordered input" />
				</div>

				<div class="form-control mt-6">
					<button class="btn-primary btn">Send Magic Link</button>
				</div>
			</div>
		</div>
	</div>
</div>
