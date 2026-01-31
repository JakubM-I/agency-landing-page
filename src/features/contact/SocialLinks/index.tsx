import { useLoaderData } from "react-router";
import SectionIntro from "../../../components/TextSection";
import SectionTitle from "../../../components/SectionTitle";
import type { SocialLinksProps } from "../../../components/types/interfaces";

const SocialLinks: React.FC<SocialLinksProps> = ({items, images}) => {
    const content = useLoaderData();

    return (
        <section aria-labelledby="socialLinks">
            <SectionTitle title={items.title} styling="mb-8" id="socialLinks" />
            <SectionIntro items={content.contactPage.socialSection}  />
        </section>
    )
}

export default SocialLinks;