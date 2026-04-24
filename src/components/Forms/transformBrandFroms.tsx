import { useState } from "react";

const services = [
    {
        id: "transform-brand-identity",
        value: "brand-identity-strategy",
        label: "Brand Identity & Strategy",
    },
    {
        id: "transform-digital-marketing",
        value: "digital-marketing",
        label: "Digital Marketing",
    },
    {
        id: "transform-graphic-design",
        value: "graphic-design",
        label: "Graphic Design",
    },
    {
        id: "transform-photography-visual-content",
        value: "photography-visual-content",
        label: "Photography & Visual Content",
    },
    {
        id: "transform-web-development",
        value: "web-development",
        label: "Web Development",
    },
    {
        id: "transform-other",
        value: "other",
        label: "Other",
    },
];

const TransformBrandForm: React.FC = () => {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const handleServiceChange = (service: string) => {
        setSelectedServices((currentServices) => {
            if (currentServices.includes(service)) {
                return currentServices.filter((currentService) => currentService !== service);
            }

            return [...currentServices, service];
        });
    };

    return (
        <div className="">
            <div className="bg-gradient-to-r from-[#4fbfa3] from-50% to-[#5ac9ae] to-80% text-center py-7">
                <p className="text-white text-preset-7 mb-2.5">sunnyside</p>
                <p className="text-white text-preset-5 mb-2.5">Let&apos;s Get Started</p>
                <p className="text-white text-preset-11">Tell us about your project needs</p>
            </div>
            <form action="" className="p-5">
                <div className="flex gap-2.5 flex-wrap">
                    <div className="flex flex-col mb-2 gap-1 flex-[1_0_40%]">
                        <label htmlFor="transform-name" className="text-preset-10">Name *</label>
                        <input type="text" required id="transform-name" placeholder="Name" className="p-2 border border-grey-550 rounded-xl" />
                    </div>
                    <div className="flex flex-col mb-2 gap-1 flex-[1_0_40%]">
                        <label htmlFor="transform-email" className="text-preset-10">Email *</label>
                        <input type="email" required id="transform-email" placeholder="your.email@example.com" className="p-2 border border-grey-550 rounded-xl" />
                    </div>
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="transform-company" className="text-preset-10">Company name *</label>
                    <input type="text" required id="transform-company" placeholder="Company name" className="p-2 border border-grey-550 rounded-xl" />
                </div>
                <div className="text-preset-10">Which services interest you? *</div>
                <div className="text-preset-11 font-normal mb-1">Which services are you interested in? * (select all that apply)</div>
                <div className="flex flex-col mb-2 gap-1">
                    {services.map((service) => (
                        <div key={service.id} className="flex items-center justify-start gap-2">
                            <input
                                type="checkbox"
                                name="transform_services"
                                id={service.id}
                                value={service.value}
                                checked={selectedServices.includes(service.value)}
                                required={selectedServices.length === 0}
                                onChange={() => handleServiceChange(service.value)}
                            />
                            <label htmlFor={service.id}>{service.label}</label>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="transform-main-goal" className="text-preset-10">What&apos;s your main goal? *</label>
                    <textarea
                        id="transform-main-goal"
                        required
                        minLength={10}
                        placeholder="Tell us what you&apos;re looking to achieve..."
                        className="p-2 border border-grey-550 rounded-xl"
                    ></textarea>
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="transform-budget-range" className="text-preset-10">Budget range *</label>
                    <select id="transform-budget-range" required defaultValue="" className="p-2 border border-grey-550 rounded-xl">
                        <option value="" disabled>Select budget range</option>
                        <option value="under-5000">Under $5,000</option>
                        <option value="5000-15000">$5,000 - $15,000</option>
                        <option value="15000-30000">$15,000 - $30,000</option>
                        <option value="30000-plus">$30,000+</option>
                        <option value="lets-discuss">Let&apos;s discuss</option>
                    </select>
                </div>
                <div className="flex flex-col mb-5 gap-1">
                    <label htmlFor="transform-timeline" className="text-preset-10">When would you like to start? *</label>
                    <select id="transform-timeline" required defaultValue="" className="p-2 border border-grey-550 rounded-xl">
                        <option value="" disabled>Select timeline</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-3-months">Within 1-3 months</option>
                        <option value="3-6-months">Within 3-6 months</option>
                        <option value="exploring">Just exploring options</option>
                    </select>
                </div>
                <button type="submit"
                    className="mx-[auto_0] w-full bg-[#4fbfa3] py-2.5 px-3.5 rounded-2xl shadow-lg text-white uppercase text-preset-8 font-bold text-center transition duration-450 easy-in-out hover:-translate-y-1 cursor-pointer"
                >
                    Request Consultation</button>
            </form>
        </div>
    );
}

export default TransformBrandForm;
