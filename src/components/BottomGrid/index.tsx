import cane from "../../assets/desktop/image-gallery-cone.jpg";
import milkbottles from "../../assets/desktop/image-gallery-milkbottles.jpg";
import orange from "../../assets/desktop/image-gallery-orange.jpg";
import sugarcubes from "../../assets/desktop/image-gallery-sugarcubes.jpg";

const BottomGrid: React.FC = () => {
    return (
        <div className="flex items-center justify-center flex-wrap md:flex-nowrap">
            <picture className="w-full h-full object-cover flex-[0_1_50%] md:flex-auto" >
                <source srcSet={milkbottles} />
                <img src={milkbottles} alt="" />
            </picture>
            <picture className="w-full h-full object-cover flex-[0_1_50%] md:flex-auto" >
                <source srcSet={orange} />
                <img src={orange} alt=""  />
            </picture>
            <picture className="w-full h-full object-cover flex-[0_1_50%] md:flex-auto" >
                <source srcSet={cane} />
                <img src={cane} alt="" />
            </picture>
            <picture className="w-full h-full object-cover flex-[0_1_50%] md:flex-auto" >
                <source srcSet={sugarcubes} />
                <img src={sugarcubes} alt="" />
            </picture>
        </div>
    )
};

export default BottomGrid;