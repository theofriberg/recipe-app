import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals: { supabase } }) => {
    const { data } = await supabase.from('recipes').select('*, recipe_items(*)')

    if (data) {
        return {
            recipes: data
        }
    }
};