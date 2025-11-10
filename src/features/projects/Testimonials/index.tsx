import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

import type { TestimonialProps } from "../../../components/types/interfaces";

const Testimonials: React.FC<TestimonialProps> = ({ items, images }) => {
    return (
        <div className="pt-12 md:pt-16 px-5 md:px-2 full:px-0">
            <div className="px-6 md:px-10 py-14 flex flex-wrap items-start justify-center gap-12 sx:gap-6 lg:gap-12 bg-[#FFFBF0] rounded-2xl">
                <Swiper 
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".nav-nextEl",
                        prevEl: ".nav-prevEl",
                    }}
                    pagination={{ 
                        el: ".nav-pagination",
                        type: "bullets",
                        clickable: true 
                    }}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index} >
                            <div className="w-[min(800px,100%)] text-center mx-auto">
                                <div className="text-preset-11 sm:text-preset-9 text-grey-600 text-pretty mb-5">{`"${item.testimonial}"`}</div>
                                <div className="flex justify-center items-center gap-3.5">
                                    <div>
                                        {images ? (<img className="w-16 sm:w-20 h-auto rounded-full" src={images[item.section][item.img]} alt={item.name} />) : null}
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-preset-8 sm:text-preset-9">{item.name}</h4>
                                        <p className="text-preset-12 sm:text-preset-11 text-grey-600">{item.info}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div>
                        <div>
                            <button className="nav-prevEl"><FcPrevious /></button>
                            <button className="nav-nextEl"><FcNext /></button>
                        </div>
                        <div className="nav-pagination"></div>
                    </div>
                </Swiper>


                {/* {items.map((item, index) => (
                    <div key={index} className="w-[min(800px,100%)] text-center">
                        <div className="text-preset-11 sm:text-preset-9 text-grey-600 text-pretty mb-5">{`"${item.testimonial}"`}</div>
                        <div className="flex justify-center items-center gap-3.5">
                            <div>
                                {images ? (<img className="w-16 sm:w-20 h-auto rounded-full" src={images[item.section][item.img]} alt={item.name} />) : null}
                            </div>
                            <div className="text-center">
                                <h4 className="text-preset-8 sm:text-preset-9">{item.name}</h4>
                                <p className="text-preset-12 sm:text-preset-11 text-grey-600">{item.info}</p>
                            </div>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default Testimonials;