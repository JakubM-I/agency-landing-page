import type { ContactsProps } from "../../../components/types/interfaces";

const ContactsSection: React.FC<ContactsProps> = ({ items, images }) => {

    return (
        <section aria-label="Contact section">
            <address>
                {items.map(contact => (
                    <dl>
                        <dt>
                            <img src={images[contact.section][contact.img]} alt={contact.title} />
                            {contact.title}
                        </dt>
                        <dd>{contact.description}</dd>
                        <dd>
                            {contact.contactType === "address" && (
                                <span>{contact.contactInfo}</span>
                            )}
                            {contact.contactType === "phone" && (
                                <a href={`tel:${contact.contactInfo}`}>{contact.contactInfo}</a>
                            )}
                            {contact.contactType === "email" && (
                                <a href={`mailto:${contact.contactInfo}`}>{contact.contactInfo}</a>
                            )}
                        </dd>
                        <dd>
                            {contact.contactInfo2 ? (<span>{contact.contactInfo2}</span>) : null}
                        </dd>
                    </dl>
                ))}
            </address>
        </section>
    )
}
export default ContactsSection;