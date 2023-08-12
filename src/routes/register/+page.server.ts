import { registerSchema } from '$lib/zodSchemas'
import type { Actions } from './$types';
import { ZodError } from 'zod';
import { fail, redirect } from '@sveltejs/kit';


export const actions: Actions = {
    default: async ({ request, url, locals: { supabase } }) => {
        const formData = Object.fromEntries(await request.formData())

        try {
            registerSchema.parse(formData) //Validates the formdata, throws ZodError if invalid
            await supabase.auth.signUp({
                email: formData.email as string,
                password: formData.password as string,
                options: {
                    emailRedirectTo: `${url.origin}/auth/callback`
                }
            })
        } catch (err: any) {
            console.error(err)
            if (err instanceof ZodError) {
                const { fieldErrors: errors } = err.flatten()
                return {
                    errors
                }
            }
            return fail(500, {
                error: 'Internal server error, please try again'
            })
        }
        
        throw redirect(303, '/login')
    }
    
};