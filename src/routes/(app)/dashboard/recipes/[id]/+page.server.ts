import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals: { supabase }}) => {
    const { data } = await supabase
        .from('recipes')
        .select('*, recipe_items(*)')
        .eq('id', params.id)
        .limit(1)
        .single()
    

    if (data) {
        const recipe = data
        const { data: { publicUrl } } = supabase.storage.from('recipe_imgs').getPublicUrl(recipe.img_name)
        
        if (publicUrl) {
            return { 
                recipe,
                publicUrl 
            }
        }

        return { recipe }
    }

    return fail(404, {
        error: 'No recipe found'
    })
}