import type { SectionTitleProps } from "../types/interfaces";

// interface SectionTitleProps {
//     title: string;
//     styling?: string;
// }

const SectionTitle: React.FC<SectionTitleProps> = ({title, styling, id}) => (
    <h2 className={`section-title w-full text-center text-grey-950 ${styling && styling}`} id={id}>{title}</h2>
)

export default SectionTitle;