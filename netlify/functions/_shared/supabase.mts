import { createClient } from "@supabase/supabase-js";

declare const Netlify: {
    env: {
        get: (name: string) => string | undefined;
    };
};

export const getSupabaseClient = () => {
    const supabaseUrl = Netlify.env.get("SUPABASE_URL");
    const supabaseSecretKey = Netlify.env.get("SUPABASE_SECRET_KEY");
    const missingEnv = [
        ["SUPABASE_URL", supabaseUrl],
        ["SUPABASE_SECRET_KEY", supabaseSecretKey],
    ]
        .filter(([, value]) => !value)
        .map(([name]) => name);

    if (missingEnv.length > 0 || !supabaseUrl || !supabaseSecretKey) {
        return {
            client: null,
            missingEnv,
        };
    }

    return {
        client: createClient(supabaseUrl, supabaseSecretKey, {
            auth: {
                autoRefreshToken: false,
                persistSession: false,
            },
        }),
        missingEnv,
    };
};
