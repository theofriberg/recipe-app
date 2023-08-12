<script lang="ts">
	import 'iconify-icon'
</script>

<div class="navbar sticky top-0 shadow-md bg-link-water-200 z-10">
	<div class="flex-none">
		<button class="btn btn-square btn-ghost mx-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/></svg
			>
		</button>
	</div>
	<div class="flex-1">
		<a href="/" class=""><img src="/main-logo.webp" alt="Main Logo" height="100" width="100" /></a>
	</div>
	<div class="flex-none mx-2">
		<form action="/api/logout" method="POST">
			<button class="text-3xl hover:scale-110" title="Logout"
				><iconify-icon icon="material-symbols:logout" /></button
			>
		</form>
	</div>
</div>

<slot />
