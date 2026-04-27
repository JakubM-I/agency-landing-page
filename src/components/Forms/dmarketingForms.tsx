import type { FormEvent } from "react";
import { useState } from "react";
import FormStatusMessage from "./FormStatusMessage";
import { useFormSubmission } from "./useFormSubmission";

const marketingGoals = [
    "Increase website traffic",
    "Generate qualified leads",
    "Boost social media presence",
    "Improve conversion rates",
    "Build brand awareness",
    "Launch new product/service",
];

const packageOptions = [
    { id: "essential-digital", value: "Essential Digital", label: "Essential Digital ($1,500/month)" },
    { id: "growth-accelerator", value: "Growth Accelerator", label: "Growth Accelerator ($3,500/month)" },
    { id: "full-scale-digital", value: "Full-Scale Digital", label: "Full-Scale Digital ($6,500/month)" },
    { id: "need-recommendation", value: "I need a recommendation", label: "I need a recommendation" },
];

const initialMarketingForm = {
    name: "",
    email: "",
    company_name: "",
    website_url: "",
    marketing_goals: [] as string[],
    challenges: "",
    package_interest: "",
    monthly_budget: "",
    timeline: "",
};

const DmarketingForms: React.FC = () => {
    const [form, setForm] = useState(initialMarketingForm);
    const { isSubmitting, submission, submit } = useFormSubmission("dmarketing");

    const handleGoalChange = (goal: string) => {
        setForm((current) => {
            if (current.marketing_goals.includes(goal)) {
                return {
                    ...current,
                    marketing_goals: current.marketing_goals.filter((currentGoal) => currentGoal !== goal),
                };
            }

            if (current.marketing_goals.length >= 3) {
                return current;
            }

            return {
                ...current,
                marketing_goals: [...current.marketing_goals, goal],
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
                website_url: form.website_url.trim() || null,
                marketing_goals: form.marketing_goals,
                challenges: form.challenges.trim(),
                package_interest: form.package_interest,
                monthly_budget: form.monthly_budget,
                timeline: form.timeline,
            },
            () => setForm(initialMarketingForm),
        );
    };

    return (
        <div className="">
            <div className="bg-gradient-to-r from-[#ffa62b] from-64% to-[#ffae49] to-96% text-center py-7">
                <p className="text-white text-preset-7 mb-2.5">sunnyside</p>
                <p className="text-white text-preset-5 mb-2.5">Amplify Your Presence</p>
                <p className="text-white text-preset-11">Let&apos;s build your digital marketing strategy</p>
            </div>
            <form onSubmit={handleSubmit} className="p-5">
                <div className="flex gap-2.5 flex-wrap">
                    <div className="flex flex-col mb-2 gap-1 flex-[1_0_40%]">
                        <label htmlFor="marketing-name" className="text-preset-10">Name *</label>
                        <input
                            type="text"
                            required
                            id="marketing-name"
                            placeholder="Name"
                            value={form.name}
                            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                            className="p-2 border border-grey-550 rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col mb-2 gap-1 flex-[1_0_40%]">
                        <label htmlFor="marketing-email" className="text-preset-10">Email *</label>
                        <input
                            type="email"
                            required
                            id="marketing-email"
                            placeholder="your.email@example.com"
                            value={form.email}
                            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                            className="p-2 border border-grey-550 rounded-xl"
                        />
                    </div>
                </div>

                <div className="flex gap-2.5 flex-wrap">
                    <div className="flex flex-col mb-2 gap-1 flex-[1_0_40%]">
                        <label htmlFor="marketing-company" className="text-preset-10">Company name *</label>
                        <input
                            type="text"
                            required
                            id="marketing-company"
                            placeholder="Company name"
                            value={form.company_name}
                            onChange={(event) => setForm((current) => ({ ...current, company_name: event.target.value }))}
                            className="p-2 border border-grey-550 rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col mb-2 gap-1 flex-[1_0_40%]">
                        <label htmlFor="marketing-website" className="text-preset-10">Website URL (optional)</label>
                        <input
                            type="url"
                            id="marketing-website"
                            placeholder="https://yourwebsite.com"
                            value={form.website_url}
                            onChange={(event) => setForm((current) => ({ ...current, website_url: event.target.value }))}
                            className="p-2 border border-grey-550 rounded-xl"
                        />
                    </div>
                </div>

                <div className="text-preset-10">What are your primary marketing goals? *</div>
                <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                    <p className="text-preset-11 font-normal">Select up to 3 goals</p>
                    <p className="text-preset-12 text-grey-600">{form.marketing_goals.length}/3 selected</p>
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    {marketingGoals.map((goal) => {
                        const goalId = goal.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                        const isChecked = form.marketing_goals.includes(goal);
                        const isDisabled = form.marketing_goals.length >= 3 && !isChecked;

                        return (
                            <div key={goal} className="flex items-center justify-start gap-2">
                                <input
                                    type="checkbox"
                                    name="marketing_goals"
                                    id={goalId}
                                    value={goal}
                                    checked={isChecked}
                                    disabled={isDisabled}
                                    required={form.marketing_goals.length === 0}
                                    onChange={() => handleGoalChange(goal)}
                                />
                                <label htmlFor={goalId} className={isDisabled ? "text-grey-400" : ""}>{goal}</label>
                            </div>
                        );
                    })}
                </div>

                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="marketing-challenges" className="text-preset-10">Current marketing challenges *</label>
                    <textarea
                        id="marketing-challenges"
                        required
                        minLength={20}
                        placeholder="Tell us what&apos;s holding your marketing back..."
                        value={form.challenges}
                        onChange={(event) => setForm((current) => ({ ...current, challenges: event.target.value }))}
                        className="p-2 border border-grey-550 rounded-xl min-h-28"
                    ></textarea>
                    <p className="text-preset-12 text-grey-600">Minimum 20 characters</p>
                </div>

                <div className="text-preset-10">Which package interests you? *</div>
                <div className="text-preset-11 font-normal mb-1">Choose the option that fits you best</div>
                <div className="flex flex-col mb-2 gap-1">
                    {packageOptions.map((packageOption) => (
                        <div key={packageOption.id} className="flex items-center justify-start gap-2">
                            <input
                                type="radio"
                                name="package_interest"
                                id={packageOption.id}
                                value={packageOption.value}
                                checked={form.package_interest === packageOption.value}
                                required
                                onChange={(event) => setForm((current) => ({ ...current, package_interest: event.target.value }))}
                            />
                            <label htmlFor={packageOption.id}>{packageOption.label}</label>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="marketing-budget" className="text-preset-10">Monthly marketing budget *</label>
                    <select
                        name="budget"
                        id="marketing-budget"
                        required
                        value={form.monthly_budget}
                        onChange={(event) => setForm((current) => ({ ...current, monthly_budget: event.target.value }))}
                        className="p-2 border border-grey-550 rounded-xl"
                    >
                        <option value="" disabled>Select budget range</option>
                        <option value="under-2000">Under $2,000</option>
                        <option value="2000-5000">$2,000 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000-plus">$10,000+</option>
                        <option value="flexible">Flexible / Let&apos;s discuss</option>
                    </select>
                </div>

                <div className="flex flex-col mb-5 gap-1">
                    <label htmlFor="marketing-timeline" className="text-preset-10">When would you like to start? *</label>
                    <select
                        name="timeline"
                        id="marketing-timeline"
                        required
                        value={form.timeline}
                        onChange={(event) => setForm((current) => ({ ...current, timeline: event.target.value }))}
                        className="p-2 border border-grey-550 rounded-xl"
                    >
                        <option value="" disabled>Select timeline</option>
                        <option value="this-month">This month</option>
                        <option value="next-month">Next month</option>
                        <option value="2-3-months">In 2-3 months</option>
                        <option value="planning-ahead">Just planning ahead</option>
                    </select>
                </div>

                <FormStatusMessage message={submission.message} status={submission.status} />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mx-[auto_0] w-full bg-[#ffa62b] py-2.5 px-3.5 rounded-2xl shadow-lg text-white uppercase text-preset-8 font-bold text-center transition duration-450 easy-in-out hover:-translate-y-1 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                    {isSubmitting ? "Sending..." : "Schedule Free Consultation"}
                </button>
            </form>
        </div>
    );
};

export default DmarketingForms;
