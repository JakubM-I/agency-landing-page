import { useLoaderData } from "react-router";
import { images } from "../../components/graphics/graphics.tsx";
import SectionIntro from "../../components/TextSection";
import CtaSection from "../../components/CtaSection";
import Packages from "../../components/PackagesSection";
import HeroSection from "../../components/HeroSection/index.tsx";
import Services from "../../components/ServicesSection/index.tsx";
import CaseStudy from "./CaseStudy/index.tsx";
import DevelopmentProcess from "./DevelopmentProcess/index.tsx";

const TransformBrand: React.FC = () => {
  const content = useLoaderData();

  return (
    <>
      <HeroSection
        items={content.transformBrandPage.heroSection}
        images={images.transformBrandPage}
      />
      <SectionIntro items={content.transformBrandPage.introSection} />
      <Services
        items={content.transformBrandPage.whatsIncludedSection}
        images={images.transformBrandPage}
      />
      <DevelopmentProcess items={content.transformBrandPage.processSection} />
      <CaseStudy items={content.transformBrandPage.caseStudySection} images={images.transformBrandPage} />
      <Packages items={content.transformBrandPage.packagesSection} />
      <CtaSection items={content.transformBrandPage.ctaSection} />
    </>
  );
};

export default TransformBrand;