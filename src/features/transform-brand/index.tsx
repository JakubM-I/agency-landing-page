import { useLoaderData } from "react-router";
import SectionIntro from "../../components/TextSection";
import CtaSection from "../../components/CtaSection";

const TransformBrand: React.FC = () => {
  const content = useLoaderData();

  return (
    <>
      <SectionIntro items={content.transformBrandPage.introSection} />
      <CtaSection items={content.transformBrandPage.ctaSection} />
    </>
  );
};

export default TransformBrand;