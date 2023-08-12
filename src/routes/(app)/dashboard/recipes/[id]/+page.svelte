<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData

	const { recipe, publicUrl } = data

	console.log(publicUrl)
</script>

<div class="grid grid-cols-2 auto-rows-min gap-3">
	<div class="text-center row-start-1 col-span-full md:col-span-1 w-full">
		<h1>{recipe.title}</h1>
		<img
			src={publicUrl}
			alt={recipe.img_name}
			title={recipe.img_name}
			class="w-full h-auto shadow-lg"
		/>
	</div>
	<div
		class="flex flex-col items-center gap-3 col-span-full row-start-2 md:col-span-1 md:row-start-1 w-full"
	>
		<div class="flex flex-col items-center gap-1 w-full">
			<h2>Ingredients</h2>
			{#each recipe.recipe_items as item}
				<p class="bg-white shadow-lg border rounded-md border-transparent w-full p-2">
					{`${item.name} ${item.quantity && item.quantity} ${item.unit && item.unit}`}
				</p>
			{:else}
				<p>No items to display</p>
			{/each}
		</div>

		{#if recipe.description}
			<div class="flex flex-col items-center gap-1 w-full">
				<h2>Description</h2>
				<p class="bg-white shadow-lg border rounded-md border-transparent w-full p-2">
					{recipe.description}
				</p>
			</div>
		{:else}
			<p>Recipe has no description</p>
		{/if}
	</div>
</div>
