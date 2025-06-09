import cane from "../../assets/desktop/image-gallery-cone.jpg";
import milkbottles from "../../assets/desktop/image-gallery-milkbottles.jpg";
import orange from "../../assets/desktop/image-gallery-orange.jpg";
import sugarcubes from "../../assets/desktop/image-gallery-sugarcubes.jpg";

const BottomGrid: React.FC = () => {
    return (
        <div className="flex items-center justify-center flex-wrap md:flex-nowrap">
            <picture>
                <source srcSet={milkbottles} />
                <img src={milkbottles} alt="" />
            </picture>
            <picture>
                <source srcSet={orange} />
                <img src={orange} alt="" />
            </picture>
            <picture>
                <source srcSet={cane} />
                <img src={cane} alt="" />
            </picture>
            <picture>
                <source srcSet={sugarcubes} />
                <img src={sugarcubes} alt="" />
            </picture>
        </div>
    )
};

export default BottomGrid;