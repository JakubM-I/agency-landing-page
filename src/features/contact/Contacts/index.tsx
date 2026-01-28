import type { ContactsProps } from "../../../components/types/interfaces";

const ContactsSection: React.FC<ContactsProps> = ({ items, images }) => {

    return (
        <section aria-label="Contact section">
            <ul>
                {items.map((contact, index) => (
                    <li key={index} aria-labelledby={`contact-heading-${contact.contactType}`}>
                        <div>
                            <img src={images[contact.section][contact.img]} alt="" aria-hidden="true"/>
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