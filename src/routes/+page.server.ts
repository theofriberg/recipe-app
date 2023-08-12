import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./register/$types";

export const load: PageServerLoad = async ({ parent }) => {
    const { session } = await parent()
    if (session) {
        throw redirect(303, '/dashboard')
    }
};