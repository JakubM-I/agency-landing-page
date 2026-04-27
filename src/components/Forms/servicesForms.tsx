import type { FormEvent } from "react";
import { useState } from "react";
import FormStatusMessage from "./FormStatusMessage";
import { useFormSubmission } from "./useFormSubmission";

const services = [
    { id: "brand-identity", value: "brand-identity", label: "Brand Identity & Strategy" },
    { id: "digital-marketing", value: "digital-marketing", label: "Digital Marketing" },
    { id: "graphic-design", value: "graphic-design", label: "Graphic Design" },
    { id: "photography-visual-content", value: "photography-visual-content", label: "Photography & Visual Content" },
    { id: "web-development", value: "web-development", label: "Web Development" },
    { id: "other-service", value: "other", label: "Other" },
];

const initialServicesForm = {
    name: "",
    email: "",
    company_name: "",
    selected_services: [] as string[],
    main_goal: "",
    budget_range: "",
    start_timeline: "",
};

const ServicesForm: React.FC = () => {
    const [form, setForm] = useState(initialServicesForm);
    const { isSubmitting, submission, submit } = useFormSubmission("services");

    const handleServiceChange = (service: string) => {
        setForm((current) => {
            const selected_services = current.selected_services.includes(service)
                ? current.selected_services.filter((currentService) => currentService !== service)
                : [...current.selected_services, service];

            return {
                ...current,
                selected_services,
            };
        });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await submit(
            {
                name: form.name.trim(),
                email: form.email.trim(),
                company_name: form.company_name.trim(),
                selected_services: form.selected_services,
                main_goal: form.main_goal.trim(),
                budget_range: form.budget_range,
                start_timeline: form.start_timeline,
            },
            () => setForm(initialServicesForm),
        );
    };

    return (
        <div className="">
            <div className="bg-[#ffa922] text-center py-7">
                <p className="text-white text-preset-7 mb-2.5">sunnyside</p>
                <p className="text-white text-preset-5 mb-2.5">Let&apos;s Get Started</p>
                <p className="text-white text-preset-11">Tell us about your project needs</p>
            </div>
            <form onSubmit={handleSubmit} className="p-5">
                <div className="flex gap-2.5 flex-wrap">
                    <div className="flex flex-col mb-2 gap-1 flex-[1_0_40%]">
                        <label htmlFor="service-name" className="text-preset-10">Name *</label>
                        <input
                            type="text"
                            required
                            id="service-name"
                            placeholder="Name"
                            value={form.name}
                            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                            className="p-2 border border-grey-550 rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col mb-2 gap-1 flex-[1_0_40%]">
                        <label htmlFor="service-email" className="text-preset-10">Email *</label>
                        <input
                            type="email"
                            required
                            id="service-email"
                            placeholder="your.email@example.com"
                            value={form.email}
                            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                            className="p-2 border border-grey-550 rounded-xl"
                        />
                    </div>
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="company-name" className="text-preset-10">Company name *</label>
                    <input
                        type="text"
                        required
                        id="company-name"
                        placeholder="Company name"
                        value={form.company_name}
                        onChange={(event) => setForm((current) => ({ ...current, company_name: event.target.value }))}
                        className="p-2 border border-grey-550 rounded-xl"
                    />
                </div>
                <div className="text-preset-10">Which services interest you? *</div>
                <div className="text-preset-11 font-normal mb-1">Which services are you interested in? * (select all that apply)</div>
                <div className="flex flex-col mb-2 gap-1">
                    {services.map((service) => (
                        <div key={service.id} className="flex items-center justify-start gap-2">
                            <input
                                type="checkbox"
                                name="services"
                                id={service.id}
                                value={service.value}
                                checked={form.selected_services.includes(service.value)}
                                required={form.selected_services.length === 0}
                                onChange={() => handleServiceChange(service.value)}
                            />
                            <label htmlFor={service.id}>{service.label}</label>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="main-goal" className="text-preset-10">What&apos;s your main goal? *</label>
                    <textarea
                        id="main-goal"
                        required
                        minLength={10}
                        placeholder="Tell us what you&apos;re looking to achieve..."
                        value={form.main_goal}
                        onChange={(event) => setForm((current) => ({ ...current, main_goal: event.target.value }))}
                        className="p-2 border border-grey-550 rounded-xl"
                    ></textarea>
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="budget-range" className="text-preset-10">Budget range *</label>
                    <select
                        id="budget-range"
                        required
                        value={form.budget_range}
                        onChange={(event) => setForm((current) => ({ ...current, budget_range: event.target.value }))}
                        className="p-2 border border-grey-550 rounded-xl"
                    >
                        <option value="" disabled>Select budget range</option>
                        <option value="under-5000">Under $5,000</option>
                        <option value="5000-15000">$5,000 - $15,000</option>
                        <option value="15000-30000">$15,000 - $30,000</option>
                        <option value="30000-plus">$30,000+</option>
                        <option value="lets-discuss">Let&apos;s discuss</option>
                    </select>
                </div>
                <div className="flex flex-col mb-5 gap-1">
                    <label htmlFor="start-timeline" className="text-preset-10">When would you like to start? *</label>
                    <select
                        id="start-timeline"
                        required
                        value={form.start_timeline}
                        onChange={(event) => setForm((current) => ({ ...current, start_timeline: event.target.value }))}
                        className="p-2 border border-grey-550 rounded-xl"
                    >
                        <option value="" disabled>Select timeline</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-3-months">Within 1-3 months</option>
                        <option value="3-6-months">Within 3-6 months</option>
                        <option value="exploring">Just exploring options</option>
                    </select>
                </div>
                <FormStatusMessage message={submission.message} status={submission.status} />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mx-[auto_0] w-full bg-[#ffa922] py-2.5 px-3.5 rounded-2xl shadow-lg text-white uppercase text-preset-8 font-bold text-center transition duration-450 easy-in-out hover:-translate-y-1 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                    {isSubmitting ? "Sending..." : "Request Consultation"}
                </button>
            </form>
        </div>
    );
};

export default ServicesForm;
