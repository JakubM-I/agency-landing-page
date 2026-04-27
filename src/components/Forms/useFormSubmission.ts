import { useState } from "react";

export type FormType = "contact" | "dmarketing" | "projects" | "services" | "transformBrand";

export type FormPayload = Record<string, unknown>;

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

interface SubmissionState {
    status: SubmissionStatus;
    message: string;
}

interface ApiResponse {
    error?: string;
    message?: string;
}

const initialSubmission: SubmissionState = {
    status: "idle",
    message: "",
};

const getApiErrorMessage = (result: unknown) => {
    if (!result || typeof result !== "object") {
        return null;
    }

    const { error, message } = result as ApiResponse;
    return error ?? message ?? null;
};

const postFormSubmission = async (formType: FormType, payload: FormPayload) => {
    const response = await fetch(`/api/forms/${formType}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    let result: unknown = null;

    try {
        result = await response.json();
    } catch {
        result = null;
    }

    if (!response.ok) {
        throw new Error(getApiErrorMessage(result) ?? "We could not send your request. Please try again.");
    }
};

export const useFormSubmission = (formType: FormType) => {
    const [submission, setSubmission] = useState<SubmissionState>(initialSubmission);

    const submit = async (payload: FormPayload, onSuccess?: () => void) => {
        setSubmission({
            status: "submitting",
            message: "",
        });

        try {
            await postFormSubmission(formType, payload);
            onSuccess?.();
            setSubmission({
                status: "success",
                message: "Thank you. Your request has been sent.",
            });
        } catch (error) {
            setSubmission({
                status: "error",
                message: error instanceof Error ? error.message : "We could not send your request. Please try again.",
            });
        }
    };

    return {
        isSubmitting: submission.status === "submitting",
        submission,
        submit,
    };
};
