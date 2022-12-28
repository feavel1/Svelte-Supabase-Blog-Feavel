<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-missing-attribute -->

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar fixed w-full bg-base-300">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" class="btn-ghost btn-square btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>
			<div class="flex-1">
				<div class="mx-2px-2 btn-ghost btn"><a href="/home">Feavel's Music Camp</a></div>
			</div>
			<div class="hidden flex-none lg:block">
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
					<div class="dropdown-hover dropdown-end dropdown">
						<label tabindex="0" class="btn-ghost btn m-1">Learn</label>
						<ul tabindex="0" class="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow">
							<li><a>Music Production</a></li>
							<li><a>Recording</a></li>
							<li><a>Mixing</a></li>
							<li><a>Mastering</a></li>
						</ul>
					</div>
					<div class="dropdown-hover dropdown-end dropdown">
						<label tabindex="0" class="btn-ghost btn m-1">Community</label>

						<table
							tabindex="0"
							class="dropdown-content rounded-box  table w-full bg-base-100 p-2 shadow"
						>
							<!-- head -->
							<thead>
								<tr>
									<th />
									<th>Name</th>
									<th>Job</th>
									<th>Favorite Color</th>
								</tr>
							</thead>
							<tbody>
								<!-- row 1 -->
								<tr>
									<th>1</th>
									<td>Cy Ganderton</td>
									<td>Quality Control Specialist</td>
									<td>Blue</td>
								</tr>
								<!-- row 2 -->
								<tr>
									<th>2</th>
									<td>Hart Hagerty</td>
									<td>Desktop Support Technician</td>
									<td>Purple</td>
								</tr>
								<!-- row 3 -->
								<tr>
									<th>3</th>
									<td>Brice Swyre</td>
									<td>Tax Accountant</td>
									<td>Red</td>
								</tr>
							</tbody>
						</table>
					</div>
					<li><a href="/my-account">My Account</a></li>
				</ul>
			</div>

			<label class="swap btn-ghost swap-rotate btn mx-1">
				<input type="checkbox" data-toggle-theme="mytheme,cmyk" data-act-class="ACTIVECLASS" />

				<svg
					class="swap-on h-5 w-5 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
					/>
				</svg>

				<svg
					class="swap-off h-5 w-5 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
					/>
				</svg>
			</label>
		</div>

		<!-- Page content here -->
		<div class="mt-28 px-6 pb-16 xl:pr-2">
			<div class="flex flex-col-reverse justify-center gap-6 xl:flex-row ">
				<slot />
			</div>
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu w-80 bg-base-100 p-4">
			<!-- Sidebar content here -->
			<li><a>Learn</a></li>
			<li><a>Community</a></li>
			<li><a>My Account</a></li>
		</ul>
	</div>
</div>
