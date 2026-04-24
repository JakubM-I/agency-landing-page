import { useState } from "react";

const marketingGoals = [
    "Increase website traffic",
    "Generate qualified leads",
    "Boost social media presence",
    "Improve conversion rates",
    "Build brand awareness",
    "Launch new product/service",
];

const DmarketingForms: React.FC = () => {
    const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

    const handleGoalChange = (goal: string) => {
        setSelectedGoals((currentGoals) => {
            if (currentGoals.includes(goal)) {
                return currentGoals.filter((currentGoal) => currentGoal !== goal);
            }

            if (currentGoals.length >= 3) {
                return currentGoals;
            }

            return [...currentGoals, goal];
        });
    };

    return (
        <div className="">
            <div className="bg-gradient-to-r from-[#ffa62b] from-64% to-[#ffae49] to-96% text-center py-7">
                <p className="text-white text-preset-7 mb-2.5">sunnyside</p>
                <p className="text-white text-preset-5 mb-2.5">Amplify Your Presence</p>
                <p className="text-white text-preset-11">Let&apos;s build your digital marketing strategy</p>
            </div>
            <form action="" className="p-5">
                <div className="flex gap-2.5 flex-wrap">
                    <div className="flex flex-col mb-2 gap-1 flex-[1_0_40%]">
                        <label htmlFor="name" className="text-preset-10">Name *</label>
                        <input type="text" required id="name" placeholder="Name" className="p-2 border border-grey-550 rounded-xl" />
                    </div>
                    <div className="flex flex-col mb-2 gap-1 flex-[1_0_40%]">
                        <label htmlFor="email" className="text-preset-10">Email *</label>
                        <input type="email" required id="email" placeholder="your.email@example.com" className="p-2 border border-grey-550 rounded-xl" />
                    </div>
                </div>

                <div className="flex gap-2.5 flex-wrap">
                    <div className="flex flex-col mb-2 gap-1 flex-[1_0_40%]">
                        <label htmlFor="company" className="text-preset-10">Company name *</label>
                        <input type="text" required id="company" placeholder="Company name" className="p-2 border border-grey-550 rounded-xl" />
                    </div>
                    <div className="flex flex-col mb-2 gap-1 flex-[1_0_40%]">
                        <label htmlFor="website" className="text-preset-10">Website URL (optional)</label>
                        <input type="url" id="website" placeholder="https://yourwebsite.com" className="p-2 border border-grey-550 rounded-xl" />
                    </div>
                </div>

                <div className="text-preset-10">What are your primary marketing goals? *</div>
                <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                    <p className="text-preset-11 font-normal">Select up to 3 goals</p>
                    <p className="text-preset-12 text-grey-600">{selectedGoals.length}/3 selected</p>
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    {marketingGoals.map((goal) => {
                        const goalId = goal.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                        const isChecked = selectedGoals.includes(goal);
                        const isDisabled = selectedGoals.length >= 3 && !isChecked;

                        return (
                            <div key={goal} className="flex items-center justify-start gap-2">
                                <input
                                    type="checkbox"
                                    name="marketing_goals"
                                    id={goalId}
                                    value={goal}
                                    checked={isChecked}
                                    disabled={isDisabled}
                                    required={selectedGoals.length === 0}
                                    onChange={() => handleGoalChange(goal)}
                                />
                                <label htmlFor={goalId} className={isDisabled ? "text-grey-400" : ""}>{goal}</label>
                            </div>
                        );
                    })}
                </div>

                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="challenges" className="text-preset-10">Current marketing challenges *</label>
                    <textarea
                        id="challenges"
                        required
                        minLength={20}
                        placeholder="Tell us what&apos;s holding your marketing back..."
                        className="p-2 border border-grey-550 rounded-xl min-h-28"
                    ></textarea>
                    <p className="text-preset-12 text-grey-600">Minimum 20 characters</p>
                </div>

                <div className="text-preset-10">Which package interests you? *</div>
                <div className="text-preset-11 font-normal mb-1">Choose the option that fits you best</div>
                <div className="flex flex-col mb-2 gap-1">
                    <div className="flex items-center justify-start gap-2">
                        <input type="radio" name="package_interest" id="essential-digital" value="Essential Digital" required />
                        <label htmlFor="essential-digital">Essential Digital ($1,500/month)</label>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <input type="radio" name="package_interest" id="growth-accelerator" value="Growth Accelerator" />
                        <label htmlFor="growth-accelerator">Growth Accelerator ($3,500/month)</label>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <input type="radio" name="package_interest" id="full-scale-digital" value="Full-Scale Digital" />
                        <label htmlFor="full-scale-digital">Full-Scale Digital ($6,500/month)</label>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <input type="radio" name="package_interest" id="need-recommendation" value="I need a recommendation" />
                        <label htmlFor="need-recommendation">I need a recommendation</label>
                    </div>
                </div>

                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="budget" className="text-preset-10">Monthly marketing budget *</label>
                    <select name="budget" id="budget" required className="p-2 border border-grey-550 rounded-xl">
                        <option value="">Select budget range</option>
                        <option value="under-2000">Under $2,000</option>
                        <option value="2000-5000">$2,000 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000-plus">$10,000+</option>
                        <option value="flexible">Flexible / Let&apos;s discuss</option>
                    </select>
                </div>

                <div className="flex flex-col mb-5 gap-1">
                    <label htmlFor="timeline" className="text-preset-10">When would you like to start? *</label>
                    <select name="timeline" id="timeline" required className="p-2 border border-grey-550 rounded-xl">
                        <option value="">Select timeline</option>
                        <option value="this-month">This month</option>
                        <option value="next-month">Next month</option>
                        <option value="2-3-months">In 2-3 months</option>
                        <option value="planning-ahead">Just planning ahead</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="mx-[auto_0] w-full bg-[#ffa62b] py-2.5 px-3.5 rounded-2xl shadow-lg text-white uppercase text-preset-8 font-bold text-center transition duration-450 easy-in-out hover:-translate-y-1 cursor-pointer"
                >
                    Schedule Free Consultation
                </button>
            </form>
        </div>
    );
}

export default DmarketingForms;
