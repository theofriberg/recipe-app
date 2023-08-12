import type { Actions } from "./$types";
import { loginSchema } from "$lib/zodSchemas";
import { ZodError } from "zod";
import { fail, redirect } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ request, url, locals: { supabase } }) => {
        const formData = Object.fromEntries(await request.formData())
        
        try {
            loginSchema.parse(formData) //Validates the formdata, throws ZodError if invalid
            const { error } = await supabase.auth.signInWithPassword({
                email: formData.email as string,
                password: formData.password as string
            })
            
            if (error && error.status === 400) {
                return fail(400, {
                    message: 'Invalid credentials'
                })
            }

        } catch (err: any) {

            if (err instanceof ZodError) {
                const { fieldErrors: errors } = err.flatten()
                return {
                    errors
                }
            }
        }

        const redirectTo = url.searchParams.get('redirectTo')
        if (redirectTo) {
            throw redirect(303, `/${redirectTo.slice(1)}`)
        }
        
        throw redirect(303, '/dashboard')
    }
};