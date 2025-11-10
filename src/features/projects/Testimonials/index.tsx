import type { ProjectProps } from "../../../components/types/interfaces";

const Testimonials: React.FC<ProjectProps> = ({items, images}) => {
    return (
        <div className="pt-12 md:pt-16 px-5 md:px-2 full:px-0">
            <div className="px-6 md:px-10 py-14 flex flex-wrap items-start justify-center gap-12 sx:gap-6 lg:gap-12 bg-[#FFFBF0] rounded-2xl">
                <div className="w-[min(800px,100%)] text-center">
                    <div className="text-preset-11 sm:text-preset-9 text-grey-600 text-pretty mb-5">"Sunnyside transformed our brand completely. Their creative vision and attention to detail exceeded our expectations. The new identity has significantly improved our market presence and customer engagement."</div>
                    <div className="flex justify-center items-center gap-3.5">
                        <div>
                            {/* img */}
                        </div>
                        <div className="text-center">
                             <h4 className="text-preset-8 sm:text-preset-9">Michael Chen</h4>
                             <p className="text-preset-12 sm:text-preset-11 text-grey-600">CEO, TechFlow Startup</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;