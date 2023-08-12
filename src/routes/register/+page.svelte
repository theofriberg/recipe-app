<script lang="ts">
	import type { ActionData } from './$types'

	export let form: ActionData
</script>

<form
	method="POST"
	class="flex flex-col justify-center items-center gap-4 bg-link-water-200 h-screen"
>
	<h1 class="text-3xl font-medium text-center my-2">Register</h1>
	<input
		type="email"
		placeholder="Email"
		class="input input-bordered w-full max-w-xs"
		name="email"
	/>

	{#if form?.errors?.email}
		<p class="text-error text-sm">{form?.errors?.email[0]}</p>
	{/if}

	<input
		type="email"
		placeholder="Confirm Email"
		class="input input-bordered w-full max-w-xs"
		name="emailConfirm"
	/>

	{#if form?.errors?.emailConfirm}
		<p class="text-error text-sm">{form?.errors?.emailConfirm[0]}</p>
	{/if}

	<input
		type="password"
		placeholder="Password"
		class="input input-bordered w-full max-w-xs"
		name="password"
	/>

	{#if form?.errors?.password}
		<p class="text-error text-sm">{form?.errors?.password[0]}</p>
	{/if}

	<input
		type="password"
		placeholder="Confirm Password"
		class="input input-bordered w-full max-w-xs"
		name="passwordConfirm"
	/>

	{#if form?.errors?.passwordConfirm}
		<p class="text-error text-sm">{form?.errors?.passwordConfirm[0]}</p>
	{/if}

	<button type="submit" class="btn btn-wide bg-link-water-300">Register</button>
</form>
