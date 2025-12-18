import { useLoaderData } from "react-router";
import SectionIntro from "../../components/TextSection";
import CtaSection from "../../components/CtaSection";
import Packages from "../../components/PackagesSection";

const TransformBrand: React.FC = () => {
  const content = useLoaderData();

  return (
    <>
      <SectionIntro items={content.transformBrandPage.introSection} />
      <Packages items={content.transformBrandPage.packagesSection} />
      <CtaSection items={content.transformBrandPage.ctaSection} />
    </>
  );
};

export default TransformBrand;