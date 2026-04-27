interface FormStatusMessageProps {
    message: string;
    status: "idle" | "submitting" | "success" | "error";
}

const FormStatusMessage = ({ message, status }: FormStatusMessageProps) => {
    if (!message || status === "idle" || status === "submitting") {
        return null;
    }

    const statusClassName = status === "success" ? "text-green-700" : "text-red-700";

    return (
        <p className={`mb-3 text-center text-preset-11 ${statusClassName}`} role="status">
            {message}
        </p>
    );
};

export default FormStatusMessage;
