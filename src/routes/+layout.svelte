<script lang="ts">
	import { onMount } from 'svelte'
	import '../app.css'
	import { invalidate } from '$app/navigation'
	import type { LayoutData } from './$types'

	export let data: LayoutData

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== _session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => subscription.unsubscribe()
	})
</script>

<slot />
