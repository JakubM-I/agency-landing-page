import SectionTitle from "../../../components/SectionTitle";
import type { SocialLinksProps } from "../../../components/types/interfaces";

const SocialLinks: React.FC<SocialLinksProps> = ({ items, images }) => {
    return (
        <section className="py-16 sx:py-[67px]"  aria-labelledby="socialLinks">
            <SectionTitle title={items.title} styling="mb-8" id="socialLinks" />
            {items.description && (
                <div className="text-center mb-8 text-preset-10 text-grey-550 text-pretty">{items.description}</div>
            )}
            <ul className="flex justify-center items-center gap-6 px-2.5 flex-wrap md:flex-nowrap">
                {items.profiles.map((profile) => (
                    <li key={profile.platform} className="flex-[0_0_auto] social-links md:w-20">
                        <a href={profile.link} className="block rounded-full w-full overflow-hidden " target="_blank" rel="noopener noreferrer">
                           {images && ( 
                            <img className="w-full h-auto aspect-square object-cover rounded-full transition-transform duration-300 md:hover:scale-110" 
                                src={images[items.section][profile.img]} alt="" />
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default SocialLinks;