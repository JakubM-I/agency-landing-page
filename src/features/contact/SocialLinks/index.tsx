import SectionTitle from "../../../components/SectionTitle";
import type { SocialLinksProps } from "../../../components/types/interfaces";

const SocialLinks: React.FC<SocialLinksProps> = ({ items, images }) => {
    return (
        <section aria-labelledby="socialLinks">
            <SectionTitle title={items.title} styling="mb-8" id="socialLinks" />
            {items.description && (<div>{items.description}</div>)}
            <ul>
                {items.profiles.map((profile) => (
                    <li key={profile.platform}>
                        <a href={profile.link}>
                           {images && ( <img src={images[items.section][profile.img]} alt="" />)}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default SocialLinks;