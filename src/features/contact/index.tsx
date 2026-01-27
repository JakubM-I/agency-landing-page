import { useLoaderData } from "react-router";
import HeroSection from "../../components/HeroSection";
import {images} from "../../components/graphics/graphics.tsx";  

const ContactPage: React.FC = () => {
    const content = useLoaderData();

    return (
        <>
            <HeroSection 
                items={content.contactPage.heroSection} 
                images={images.contactPage} 
            />
        </>

    )
};

export default ContactPage;