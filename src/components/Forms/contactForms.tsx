const ContactForm: React.FC = () => {

    return (
        <div className="">
            <div className="bg-red-400 text-center py-7">
                <p className="text-white text-preset-7 mb-2.5">sunnyside</p>
                <p className="text-white text-preset-9 mb-2.5">Get in Touch</p>
                <p className="text-white text-preset-11">We'll get back to you within 24 hours.</p>
            </div>
            <form action="" className="p-5">
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="name" className="text-preset-10">Name</label>
                    <input type="text" id="name" placeholder="Your full name" className="p-2 border border-grey-550 rounded-xl"/>
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="email" className="text-preset-10">Email</label>
                    <input type="email" id="email" placeholder="your.email@example.com" className="p-2 border border-grey-550 rounded-xl"/>
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="subject" className="text-preset-10">I'm reaching out about</label>
                    <select name="subject" id="subject" className="p-2 border border-grey-550 rounded-xl">
                        <option value="">Subject an option</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Support Request</option>
                    </select>
                </div>
                <div className="flex flex-col mb-2 gap-1">
                    <label htmlFor="phone" className="text-preset-10">Phone Number (optional)</label>
                    <input type="number" id="phone" placeholder="+48 33 444 55 66" className="p-2 border border-grey-550 rounded-xl"/>
                </div>
                <div className="flex flex-col mb-5 gap-1"> 
                    <label htmlFor="message" className="text-preset-10">Your Message</label>
                    <textarea id="message" placeholder="Tell us more about what you're looking for..." className="p-2 border border-grey-550 rounded-xl"></textarea>
                </div>
                <button type="submit"
                    className="mx-[auto_0] w-full bg-red-400 py-2.5 px-3.5 rounded-2xl shadow-lg text-white uppercase text-preset-8 font-bold text-center transition duration-450 easy-in-out hover:-translate-y-1 cursor-pointer"
                >
                    Send</button>
            </form>
        </div>
    )
}

export default ContactForm;