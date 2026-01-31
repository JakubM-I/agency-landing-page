import { useLoaderData } from "react-router";
import SectionIntro from "../../../components/TextSection";
import SectionTitle from "../../../components/SectionTitle";

const SocialLinks: React.FC = () => {
    const content = useLoaderData();

    return (
        <section aria-labelledby="socialLinks">
            <SectionTitle title="Follow Our Journey" styling="mb-8" id="socialLinks" />
            <SectionIntro items={content.aboutPage.introSection}  />
        </section>
    )
}

export default SocialLinks;