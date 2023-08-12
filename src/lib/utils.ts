import type { RequestEvent } from "../routes/$types";

export function handleLoginRedirect(
    event: RequestEvent, 
    message: string = 'You must log in to access this page'
 ) {
    const redirectTo = event.url.pathname + event.url.search
    return `/login?redirectTo=${redirectTo}&message=${message}`
}