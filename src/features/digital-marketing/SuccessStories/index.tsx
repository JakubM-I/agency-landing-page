import SectionTitle from "../../../components/SectionTitle";
import type { SuccessStoriesProps } from "../../../components/types/interfaces";

const SuccessStories: React.FC<SuccessStoriesProps> = ({items, images}) => {
    return (
        <div className="py-16 sx:py-[67px] bg-[#F7F7F7]">
             <SectionTitle title="Success Stories" styling="mb-8" />
              <div className="flex flex-col sm:flex-row flex-nowrap sm:flex-wrap justify-center items-stretch gap-10 sm:gap-8 px-6">
                
              </div>
        </div>
    )
};

export default SuccessStories;