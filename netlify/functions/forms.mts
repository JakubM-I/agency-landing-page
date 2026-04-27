import type { Config, Context } from "@netlify/functions";
import { jsonResponse } from "./_shared/json-response.mts";
import { getSupabaseClient } from "./_shared/supabase.mts";

const submissionTables = {
    contact: "contact_submissions",
    dmarketing: "digital_marketing_submissions",
    projects: "projects_submissions",
    services: "services_submissions",
    transformBrand: "brand_identity_submissions",
} as const;

type FormType = keyof typeof submissionTables;

const isRecord = (value: unknown): value is Record<string, unknown> => {
    return typeof value === "object" && value !== null && !Array.isArray(value);
};

const getSubmissionTable = (formType: string) => {
    if (formType in submissionTables) {
        return submissionTables[formType as FormType];
    }

    return null;
};

export default async (req: Request, context: Context) => {
    if (req.method !== "POST") {
        return jsonResponse({ error: "Method not allowed." }, 405);
    }

    const formType = context.params.formType;
    const tableName = getSubmissionTable(formType);

    if (!tableName) {
        return jsonResponse({ error: "Unknown form type." }, 404);
    }

    const { client, missingEnv } = getSupabaseClient();

    if (!client) {
        return jsonResponse(
            {
                error: "Supabase environment variables are not configured.",
                missing: missingEnv,
            },
            500,
        );
    }

    let payload: unknown;

    try {
        payload = await req.json();
    } catch {
        return jsonResponse({ error: "Invalid JSON payload." }, 400);
    }

    if (!isRecord(payload)) {
        return jsonResponse({ error: "Payload must be a JSON object." }, 400);
    }

    const { error } = await client.from(tableName).insert(payload);

    if (error) {
        console.error("Supabase form submission insert failed", {
            tableName,
            code: error.code,
            message: error.message,
            details: error.details,
        });

        return jsonResponse({ error: "Could not save form submission." }, 500);
    }

    return jsonResponse({ ok: true });
};

export const config: Config = {
    path: "/api/forms/:formType",
};
