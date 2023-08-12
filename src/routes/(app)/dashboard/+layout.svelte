<script lang="ts">
	import { onMount } from 'svelte'
	import type { LayoutData } from './$types'

	export let data: LayoutData

	const { recipes } = data

	let isSidebarClosed: boolean

	function toggleSidebar() {
		isSidebarClosed = !isSidebarClosed
	}

	onMount(() => {
		isSidebarClosed = window.innerWidth < 1024 ? true : false
	})
</script>

<div class="grid grid-cols-6 auto-rows-min md:auto-rows-auto min-h-screen">
	<aside
		class:hidden={isSidebarClosed}
		class="w-full bg-link-water-900 py-4 shadow-lg col-span-full max-h-fit md:col-span-2 lg:col-span-1"
	>
		<form class="flex justify-between items-center relative mx-2">
			<input class="input input-bordered w-full" type="text" placeholder="Search recipes" />
			<button class="grid place-items-center absolute right-0 mr-1">
				<iconify-icon class="text-2xl" icon="material-symbols:search" />
			</button>
		</form>
		<ul class="w-full mt-2">
			{#if recipes}
				{#each recipes as recipe}
					<a href="/dashboard/recipes/{recipe.id}">
						<li class="w-full hover:bg-link-water-700 rounded-md px-2 py-4 text-light-text">
							{recipe.title}
						</li>
					</a>
				{/each}
			{/if}
		</ul>
	</aside>

	<main
		class:lg:col-span-full={isSidebarClosed}
		class:md:col-span-full={isSidebarClosed}
		class="flex justify-center col-span-full p-4 relative md:col-span-4 lg:col-span-5"
	>
		<button
			title={isSidebarClosed ? 'Browse recipes' : 'Close sidebar'}
			class="absolute top-0 left-0 m-2"
			on:click={toggleSidebar}
		>
			{#if isSidebarClosed}
				<iconify-icon class="text-4xl text-link-water-900" icon="raphael:search" />
			{:else}
				<iconify-icon class="text-4xl text-link-water-900" icon="material-symbols:close" />
			{/if}
		</button>
		<slot />
	</main>
</div>
