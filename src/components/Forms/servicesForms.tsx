const ServicesForm: React.FC = () => {

    return (
        <div className="">
            <div className="bg-[#ffa922] text-center py-7">
                <p className="text-white text-preset-7 mb-2.5">sunnyside</p>
                <p className="text-white text-preset-5 mb-2.5">Let's Get Started</p>
                <p className="text-white text-preset-11">Tell us about your project needs</p>
            </div>
            <form action="" className="p-5">
                <div className="flex gap-2.5 flex-wrap">
                    <div className="flex flex-col mb-2 gap-1 flex-[1_0_40%]">
                        <label htmlFor="service-name" className="text-preset-10">Name *</label>
                        <input type="text" required id="service-name" placeholder="Name" className="p-2 border border-grey-550 rounded-xl" />
                    </div>
                    <div className="flex flex-col mb-2 gap-1 flex-[1_0_40%]">
                        <label htmlFor="service-email" className="text-preset-10">Email *</label>
                        <input type="email" required id="service-email" placeholder="your.email@example.com" className="p-2 border border-grey-550 rounded-xl" />
                    </div>
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="company-name" className="text-preset-10">Company name *</label>
                    <input type="text" required id="company-name" placeholder="Company name" className="p-2 border border-grey-550 rounded-xl" />
                </div>
                <div className="text-preset-10">Which services interest you? *</div>
                <div className="text-preset-11 font-normal mb-1">Which services are you interested in? * (select all that apply)</div>
                <div className="flex flex-col mb-2 gap-1">
                    <div className="flex items-center justify-start gap-2">
                        <input type="checkbox" name="services" id="brand-identity" value="brand-identity" />
                        <label htmlFor="brand-identity">Brand Identity & Strategy</label>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <input type="checkbox" name="services" id="digital-marketing" value="digital-marketing" />
                        <label htmlFor="digital-marketing">Digital Marketing</label>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <input type="checkbox" name="services" id="graphic-design" value="graphic-design" />
                        <label htmlFor="graphic-design">Graphic Design</label>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <input type="checkbox" name="services" id="photography-visual-content" value="photography-visual-content" />
                        <label htmlFor="photography-visual-content">Photography & Visual Content</label>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <input type="checkbox" name="services" id="web-development" value="web-development" />
                        <label htmlFor="web-development">Web Development</label>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <input type="checkbox" name="services" id="other-service" value="other" />
                        <label htmlFor="other-service">Other</label>
                    </div>
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="main-goal" className="text-preset-10">What's your main goal? *</label>
                    <textarea id="main-goal" required minLength={10} placeholder="Tell us what you're looking to achieve..." className="p-2 border border-grey-550 rounded-xl"></textarea>
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="budget-range" className="text-preset-10">Budget range *</label>
                    <select id="budget-range" required defaultValue="" className="p-2 border border-grey-550 rounded-xl">
                        <option value="" disabled>Select budget range</option>
                        <option value="under-5000">Under $5,000</option>
                        <option value="5000-15000">$5,000 - $15,000</option>
                        <option value="15000-30000">$15,000 - $30,000</option>
                        <option value="30000-plus">$30,000+</option>
                        <option value="lets-discuss">Let's discuss</option>
                    </select>
                </div>
                <div className="flex flex-col mb-5 gap-1">
                    <label htmlFor="start-timeline" className="text-preset-10">When would you like to start? *</label>
                    <select id="start-timeline" required defaultValue="" className="p-2 border border-grey-550 rounded-xl">
                        <option value="" disabled>Select timeline</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-3-months">Within 1-3 months</option>
                        <option value="3-6-months">Within 3-6 months</option>
                        <option value="exploring">Just exploring options</option>
                    </select>
                </div>
                <button type="submit"
                    className="mx-[auto_0] w-full bg-[#ffa922] py-2.5 px-3.5 rounded-2xl shadow-lg text-white uppercase text-preset-8 font-bold text-center transition duration-450 easy-in-out hover:-translate-y-1 cursor-pointer"
                >
                    Request Consultation</button>
            </form>
        </div>
    )
}

export default ServicesForm;
