import { redirect } from "@sveltejs/kit"
import type { RequestEvent } from "../../routes/$types"
import type { Session } from "@supabase/supabase-js"
import { handleLoginRedirect } from "$lib/utils"

export async function authenticateUser(event: RequestEvent) {
	const session = await event.locals.getSession()
    if (event.url.pathname.startsWith('/dashboard')) {
		if (!session) {
			throw redirect(303, handleLoginRedirect(event))
		}
	}
}