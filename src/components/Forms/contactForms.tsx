const ContactForm: React.FC = () => {

    return (
        <div>
            <form action="">
                <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your full name" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="your.email@example.com" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="subject">I'm reaching out about</label>
                    <select name="subject" id="subject">
                        <option value="">Subject an option</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Support Request</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="phone">Phone Number (optional)</label>
                    <input type="number" id="phone" placeholder="+48 33 444 55 66" />
                </div>
                <div className="flex flex-col"> 
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" placeholder="Tell us more about what you're looking for..."></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default ContactForm;