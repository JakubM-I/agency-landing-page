import type { ContactsProps } from "../../../components/types/interfaces";

const ContactsSection: React.FC<ContactsProps> = ({ items, images }) => {

    return (
        <section aria-label="Contact section">
            <ul>
                {items.map((contact, index) => (
                    <li key={index}>
                        <div>
                            <img src={images[contact.section][contact.img]} alt={contact.title} />
                            {contact.title}
                        </div>
                        <div>{contact.description}</div>
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