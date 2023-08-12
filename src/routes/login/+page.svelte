<script lang="ts">
	import { page } from '$app/stores'
	import type { ActionData } from './$types'

	export let form: ActionData

	let urlMessage: string
	$: urlMessage = $page.url.searchParams.get('message') ?? ''
</script>

<div class="bg-link-water-200 flex flex-col items-center h-screen">
	<img src="/main-logo.webp" alt="Main Logo" height="300" width="600" class="w-auto h-52" />
	<form
		method="POST"
		class="flex flex-col justify-center items-center gap-2 shadow-md border border-gray-200 rounded-lg bg-white p-4 w-fit"
	>
		{#if urlMessage}
			<p class="alert alert-error max-w-xs">{urlMessage}</p>
		{/if}

		<h1>Login</h1>

		{#if form?.message}
			<p class="text-error">{form?.message}</p>
		{/if}

		<input
			type="email"
			placeholder="Email"
			name="email"
			class="input input-bordered w-full max-w-xs"
		/>

		{#if form?.errors?.email}
			<p class="text-error">{form?.errors?.email}</p>
		{/if}

		<input
			type="password"
			placeholder="Password"
			name="password"
			class="input input-bordered w-full max-w-xs"
		/>

		{#if form?.errors?.password}
			<p class="text-error">{form?.errors?.password}</p>
		{/if}

		<button type="submit" class="btn w-full bg-link-water-300">Login</button>
		<p>
			Need an account? <a
				class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
				href="/register">Click here to register</a
			>
		</p>
	</form>
</div>
