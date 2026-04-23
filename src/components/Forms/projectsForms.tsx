const ProjectsForm: React.FC = () => {

    return (
        <div className="">
            <div className="bg-[#ff6b6b] text-center py-7">
                <p className="text-white text-preset-7 mb-2.5">sunnyside</p>
                <p className="text-white text-preset-5 mb-2.5">Start Your Project</p>
                <p className="text-white text-preset-11">Tell us about your vision.</p>
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
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="project" className="text-preset-10">Company/Project name *</label>
                    <input type="text" required id="project" placeholder="Company/Project name" className="p-2 border border-grey-550 rounded-xl" />
                </div>
                <div className="text-preset-10">Project Type *</div>
                <div className="text-preset-11 font-normal mb-1">What type of project do you have in mind?</div>
                <div className="flex flex-col mb-2 gap-1">
                    <div className="flex items-center justify-start gap-2">
                        <input type="radio" name="project_type" id="identity" value="identity" />
                        <label htmlFor="identity">Brand Identity</label>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <input type="radio" name="project_type" id="marketing" value="marketing" />
                        <label htmlFor="marketing">Digital Marketing Campaign</label>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <input type="radio" name="project_type" id="website" value="design" />
                        <label htmlFor="website">Website/App Design</label>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <input type="radio" name="project_type" id="photography" value="photography" />
                        <label htmlFor="photography">Photography/Visual Content</label>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <input type="radio" name="project_type" id="print" value="print" />
                        <label htmlFor="print">Print/Graphic Design</label>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <input type="radio" name="project_type" id="services" value="services" />
                        <label htmlFor="services">Multiple services</label>
                    </div>
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="inspiration" className="text-preset-10">Inspired by any of our projects? (optional)</label>
                    <input type="text" id="inspiration" placeholder="[e.g., TechFlow, Organic Harvest...]" className="p-2 border border-grey-550 rounded-xl" />
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="vision" className="text-preset-10">Project vision *</label>
                    <textarea id="vision" required placeholder="What are you looking to create? What makes this project special?" className="p-2 border border-grey-550 rounded-xl"></textarea>
                </div>
                <div className="flex flex-col mb-5 gap-1">
                        <label htmlFor="deadline" className="text-preset-10">Deadline (optional) </label>
                        <input type="date" id="deadline" placeholder="Deadline" className="p-2 border border-grey-550 rounded-xl" />
                </div>
                <button type="submit"
                    className="mx-[auto_0] w-full bg-red-400 py-2.5 px-3.5 rounded-2xl shadow-lg text-white uppercase text-preset-8 font-bold text-center transition duration-450 easy-in-out hover:-translate-y-1 cursor-pointer"
                >
                    Send</button>
            </form>
        </div>
    )
}

export default ProjectsForm;