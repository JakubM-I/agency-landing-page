import cane from "../../assets/desktop/image-gallery-cone.jpg";
import cane_mobile from "../../assets/mobile/image-gallery-cone.jpg"
import milkbottles from "../../assets/desktop/image-gallery-milkbottles.jpg";
import milkbottles_mobile from "../../assets/mobile/image-gallery-milkbottles.jpg";
import orange from "../../assets/desktop/image-gallery-orange.jpg";
import orange_mobile from "../../assets/mobile/image-gallery-orange.jpg";
import sugarcubes from "../../assets/desktop/image-gallery-sugarcubes.jpg";
import sugarcubes_mobile from "../../assets/mobile/image-gallery-sugar-cubes.jpg";

const BottomGrid: React.FC = () => {
    return (
        <div className="flex items-center justify-center flex-wrap md:flex-nowrap">
            <picture className="w-full h-full object-cover flex-[0_1_50%] md:flex-auto" >
                <source srcSet={milkbottles} type="image/jpg" media="(375px < width)" />
                <source srcSet={milkbottles_mobile} type="image/jpg" media="(width <= 375px)" />
                <img src={milkbottles} alt="" />
            </picture>
            <picture className="w-full h-full object-cover flex-[0_1_50%] md:flex-auto" >
                <source srcSet={orange}  type="image/jpg" media="(375px < width)"/>
                <source srcSet={orange_mobile} type="image/jpg" media="(width <= 375px)" />
                <img src={orange} alt=""  />
            </picture>
            <picture className="w-full h-full object-cover flex-[0_1_50%] md:flex-auto" >
                <source srcSet={cane}  type="image/jpg" media="(375px < width)"/>
                <source srcSet={cane_mobile} type="image/jpg" media="(width <= 375px)" />
                <img src={cane} alt="" />
            </picture>
            <picture className="w-full h-full object-cover flex-[0_1_50%] md:flex-auto" >
                <source srcSet={sugarcubes}  type="image/jpg" media="(375px < width)"/>
                <source srcSet={sugarcubes_mobile} type="image/jpg" media="(width <= 375px)" />
                <img src={sugarcubes} alt="" />
            </picture>
        </div>
    )
};

export default BottomGrid;