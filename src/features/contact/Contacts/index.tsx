import type { ContactsProps } from "../../../components/types/interfaces";

const ContactsSection: React.FC<ContactsProps> = ({ items, images }) => {

    return (
        <section aria-label="Contact section">
            <ul className="w-full flex justify-center items-center gap-5">
                {items.map((contact, index) => (
                    <li key={index} 
                        className="flex-[0_1_30%] flex flex-col items-center justify-start gap-4 p-6 bg-white h-auto rounded-2xl shadow-xl"
                        aria-labelledby={`contact-heading-${contact.contactType}`}
                        >
                        <div>
                           {images ? ( <img src={images[contact.section][contact.img]} alt="" aria-hidden="true"/>) : null}
                            <h3 id={`contact-heading-${contact.contactType}`}>{contact.title}</h3>
                        </div>
                        <p>{contact.description}</p>
                        <div>
                            {contact.contactType === "address" && (
                                <span>{contact.contactInfo}</span>
                            )}
                            {contact.contactType === "phone" && (
                                <a href={`tel:${contact.contactInfo}`}>{contact.contactInfo}</a>
                            )}
                            {contact.contactType === "email" && (
                                <a href={`mailto:${contact.contactInfo}`}>{contact.contactInfo}</a>
                            )}
                            {contact.contactInfo2 ? (<span>{contact.contactInfo2}</span>) : null}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default ContactsSection;