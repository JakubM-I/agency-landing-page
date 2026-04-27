import type { FormEvent } from "react";
import { useState } from "react";
import FormStatusMessage from "./FormStatusMessage";
import { useFormSubmission } from "./useFormSubmission";

const projectTypes = [
    { id: "identity", value: "identity", label: "Brand Identity" },
    { id: "marketing", value: "marketing", label: "Digital Marketing Campaign" },
    { id: "website", value: "design", label: "Website/App Design" },
    { id: "photography", value: "photography", label: "Photography/Visual Content" },
    { id: "print", value: "print", label: "Print/Graphic Design" },
    { id: "services", value: "services", label: "Multiple services" },
];

const initialProjectForm = {
    name: "",
    email: "",
    company_project_name: "",
    project_type: "",
    inspiration: "",
    vision: "",
    deadline: "",
};

const ProjectsForm: React.FC = () => {
    const [form, setForm] = useState(initialProjectForm);
    const { isSubmitting, submission, submit } = useFormSubmission("projects");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await submit(
            {
                name: form.name.trim(),
                email: form.email.trim(),
                company_project_name: form.company_project_name.trim(),
                project_type: form.project_type,
                inspiration: form.inspiration.trim() || null,
                vision: form.vision.trim(),
                deadline: form.deadline || null,
            },
            () => setForm(initialProjectForm),
        );
    };

    return (
        <div className="">
            <div className="bg-[#ff6b6b] text-center py-7">
                <p className="text-white text-preset-7 mb-2.5">sunnyside</p>
                <p className="text-white text-preset-5 mb-2.5">Start Your Project</p>
                <p className="text-white text-preset-11">Tell us about your vision.</p>
            </div>
            <form onSubmit={handleSubmit} className="p-5">
                <div className="flex gap-2.5 flex-wrap">
                    <div className="flex flex-col mb-2 gap-1 flex-[1_0_40%]">
                        <label htmlFor="project-name" className="text-preset-10">Name *</label>
                        <input
                            type="text"
                            required
                            id="project-name"
                            placeholder="Name"
                            value={form.name}
                            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                            className="p-2 border border-grey-550 rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col mb-2 gap-1 flex-[1_0_40%]">
                        <label htmlFor="project-email" className="text-preset-10">Email *</label>
                        <input
                            type="email"
                            required
                            id="project-email"
                            placeholder="your.email@example.com"
                            value={form.email}
                            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                            className="p-2 border border-grey-550 rounded-xl"
                        />
                    </div>
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="project-company" className="text-preset-10">Company/Project name *</label>
                    <input
                        type="text"
                        required
                        id="project-company"
                        placeholder="Company/Project name"
                        value={form.company_project_name}
                        onChange={(event) => setForm((current) => ({ ...current, company_project_name: event.target.value }))}
                        className="p-2 border border-grey-550 rounded-xl"
                    />
                </div>
                <div className="text-preset-10">Project Type *</div>
                <div className="text-preset-11 font-normal mb-1">What type of project do you have in mind?</div>
                <div className="flex flex-col mb-2 gap-1">
                    {projectTypes.map((projectType) => (
                        <div key={projectType.id} className="flex items-center justify-start gap-2">
                            <input
                                type="radio"
                                name="project_type"
                                id={`project-${projectType.id}`}
                                value={projectType.value}
                                checked={form.project_type === projectType.value}
                                required
                                onChange={(event) => setForm((current) => ({ ...current, project_type: event.target.value }))}
                            />
                            <label htmlFor={`project-${projectType.id}`}>{projectType.label}</label>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="project-inspiration" className="text-preset-10">Inspired by any of our projects? (optional)</label>
                    <input
                        type="text"
                        id="project-inspiration"
                        placeholder="[e.g., TechFlow, Organic Harvest...]"
                        value={form.inspiration}
                        onChange={(event) => setForm((current) => ({ ...current, inspiration: event.target.value }))}
                        className="p-2 border border-grey-550 rounded-xl"
                    />
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="project-vision" className="text-preset-10">Project vision *</label>
                    <textarea
                        id="project-vision"
                        required
                        placeholder="What are you looking to create? What makes this project special?"
                        value={form.vision}
                        onChange={(event) => setForm((current) => ({ ...current, vision: event.target.value }))}
                        className="p-2 border border-grey-550 rounded-xl"
                    ></textarea>
                </div>
                <div className="flex flex-col mb-5 gap-1">
                    <label htmlFor="project-deadline" className="text-preset-10">Deadline (optional)</label>
                    <input
                        type="date"
                        id="project-deadline"
                        value={form.deadline}
                        onChange={(event) => setForm((current) => ({ ...current, deadline: event.target.value }))}
                        className="p-2 border border-grey-550 rounded-xl"
                    />
                </div>
                <FormStatusMessage message={submission.message} status={submission.status} />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mx-[auto_0] w-full bg-red-400 py-2.5 px-3.5 rounded-2xl shadow-lg text-white uppercase text-preset-8 font-bold text-center transition duration-450 easy-in-out hover:-translate-y-1 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                    {isSubmitting ? "Sending..." : "Send"}
                </button>
            </form>
        </div>
    );
};

export default ProjectsForm;
