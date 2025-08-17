interface SectionTitleProps {
    title: string;
    styling?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({title, styling}) => (
    <h2 className={`section-title w-full text-center text-grey-950 ${styling && styling}`}>{title}</h2>
)

export default SectionTitle;