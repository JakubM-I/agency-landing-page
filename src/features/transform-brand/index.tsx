import { useLoaderData } from "react-router";
import SectionIntro from "../../components/TextSection";

const TransformBrand: React.FC = () => {
  const content = useLoaderData();

  return (
    <>
      <SectionIntro items={content.transformBrandPage.introSection} />
    </>
  );
};

export default TransformBrand;