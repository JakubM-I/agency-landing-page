import type { FormEvent } from "react";
import { useState } from "react";
import FormStatusMessage from "./FormStatusMessage";
import { useFormSubmission } from "./useFormSubmission";

const initialContactForm = {
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
};

const ContactForm: React.FC = () => {
    const [form, setForm] = useState(initialContactForm);
    const { isSubmitting, submission, submit } = useFormSubmission("contact");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await submit(
            {
                name: form.name.trim(),
                email: form.email.trim(),
                subject: form.subject,
                phone: form.phone.trim() || null,
                message: form.message.trim(),
            },
            () => setForm(initialContactForm),
        );
    };

    return (
        <div className="">
            <div className="bg-gradient-to-r from-[#b197fc] from-69% to-[#c3b3fd] to-109% text-center py-7">
                <p className="text-white text-preset-7 mb-2.5">sunnyside</p>
                <p className="text-white text-preset-5 mb-2.5">Get in Touch</p>
                <p className="text-white text-preset-11">We&apos;ll get back to you within 24 hours.</p>
            </div>
            <form onSubmit={handleSubmit} className="p-5">
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="contact-name" className="text-preset-10">Name *</label>
                    <input
                        type="text"
                        required
                        id="contact-name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                        className="p-2 border border-grey-550 rounded-xl"
                    />
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="contact-email" className="text-preset-10">Email *</label>
                    <input
                        type="email"
                        required
                        id="contact-email"
                        placeholder="your.email@example.com"
                        value={form.email}
                        onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                        className="p-2 border border-grey-550 rounded-xl"
                    />
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="contact-subject" className="text-preset-10">I&apos;m reaching out about *</label>
                    <select
                        name="subject"
                        id="contact-subject"
                        required
                        value={form.subject}
                        onChange={(event) => setForm((current) => ({ ...current, subject: event.target.value }))}
                        className="p-2 border border-grey-550 rounded-xl"
                    >
                        <option value="" disabled>Select an option</option>
                        <option value="general">General Inquiry</option>
                        <option value="projects">Project discussion</option>
                        <option value="careers">Career opportunities</option>
                        <option value="partnership">Partnership/Collaboration</option>
                        <option value="press">Press/Media</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="contact-phone" className="text-preset-10">Phone Number (optional)</label>
                    <input
                        type="tel"
                        id="contact-phone"
                        placeholder="+48 33 444 55 66"
                        value={form.phone}
                        onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                        className="p-2 border border-grey-550 rounded-xl"
                    />
                </div>
                <div className="flex flex-col mb-5 gap-1">
                    <label htmlFor="contact-message" className="text-preset-10">Your Message *</label>
                    <textarea
                        id="contact-message"
                        required
                        placeholder="Tell us more about what you&apos;re looking for..."
                        value={form.message}
                        onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                        className="p-2 border border-grey-550 rounded-xl"
                    ></textarea>
                </div>
                <FormStatusMessage message={submission.message} status={submission.status} />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mx-[auto_0] w-full bg-[#b197fc] py-2.5 px-3.5 rounded-2xl shadow-lg text-white uppercase text-preset-8 font-bold text-center transition duration-450 easy-in-out hover:-translate-y-1 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                    {isSubmitting ? "Sending..." : "Send"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
