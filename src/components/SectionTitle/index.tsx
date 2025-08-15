interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({title}) => (
    <h2 className="section-title text-center text-grey-950 mb-8">{title}</h2>
)

export default SectionTitle;