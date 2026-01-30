import type { ContactsProps } from "../../../components/types/interfaces";

const ContactsSection: React.FC<ContactsProps> = ({ items, images }) => {

    return (
        <section aria-label="Contact section" className="py-16 sx:py-[67px] px-5 bg-[#F7F7F7]">
            <ul className="w-full flex flex-col md:flex-row justify-center items-stretch gap-9">
                {items.map((contact, index) => (
                    <li key={index} 
                        className="flex-[0_1_28%] flex flex-col items-center justify-start gap-4 p-6 bg-white h-auto rounded-2xl shadow-[0px_0px_20px_-15px_rgba(0,0,0,0.7)]"
                        aria-labelledby={`contact-heading-${contact.contactType}`}
                        >
                        <div className="flex flex-col items-center justify-start gap-3">
                           {images ? ( <img className="w-[min(100px,100%)] h-auto aspect-square object-cover rounded-full" src={images[contact.section][contact.img]} alt="" aria-hidden="true"/>) : null}
                            <h3 id={`contact-heading-${contact.contactType}`}
                                className="text-preset-5 text-grey-950"
                            >
                                {contact.title}
                            </h3>
                        </div>
                        {contact.description 
                            ? (<p className="text-preset-11 text-grey-600 text-center text-balance">{contact.description}</p>) 
                            : null }
                        <div>
                            {contact.contactType === "address" && (
                                <span className="block text-preset-11">{contact.contactInfo}</span>
                            )}
                            {contact.contactType === "phone" && (
                                <a className="text-preset-11" href={`tel:${contact.contactInfo}`}>{contact.contactInfo}</a>
                            )}
                            {contact.contactType === "email" && (
                                <a className="text-preset-11" href={`mailto:${contact.contactInfo}`}>{contact.contactInfo}</a>
                            )}
                            {contact.contactInfo2 ? (<span className="block">{contact.contactInfo2}</span>) : null}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default ContactsSection;