import { useLoaderData } from "react-router";
import HeroSection from "../../components/HeroSection";
import {images} from "../../components/graphics/graphics.tsx";  
import ContactsSection from "./Contacts/index.tsx";
import SocialLinks from "./SocialLinks/index.tsx";

const ContactPage: React.FC = () => {
    const content = useLoaderData();

    return (
        <>
            <HeroSection 
                items={content.contactPage.heroSection} 
                images={images.contactPage} 
            />
            <ContactsSection 
                items={content.contactPage.contactSection}
                images={images.contactPage}
            />
            <SocialLinks 
                items={content.contactPage.socialSection}
                images={images.contactPage}
            />
        </>

    )
};

export default ContactPage;