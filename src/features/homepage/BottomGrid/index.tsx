import cane from "../../../assets/desktop/image-gallery-cone.jpg";
import cane_mobile from "../../../assets/mobile/image-gallery-cone.jpg"
import milkbottles from "../../../assets/desktop/image-gallery-milkbottles.jpg";
import milkbottles_mobile from "../../../assets/mobile/image-gallery-milkbottles.jpg";
import orange from "../../../assets/desktop/image-gallery-orange.jpg";
import orange_mobile from "../../../assets/mobile/image-gallery-orange.jpg";
import sugarcubes from "../../../assets/desktop/image-gallery-sugarcubes.jpg";
import sugarcubes_mobile from "../../../assets/mobile/image-gallery-sugar-cubes.jpg";
import type { BottomPicturesProps } from "../../../components/types/interfaces";

// interface BottomPicturesProps {
//     id: number;
//     desktop: string;
//     mobile: string;
// }

const BottomGrid: React.FC = () => {
const bootomPictures: BottomPicturesProps[] = [
    {
        id: 1,
        desktop: milkbottles,
        mobile: milkbottles_mobile
    },
    {
        id: 2,
        desktop: orange,
        mobile: orange_mobile
    },
    {
        id: 3,
        desktop: cane,
        mobile: cane_mobile
    },
    {
        id: 4,
        desktop: sugarcubes,
        mobile: sugarcubes_mobile
    }
]

    return (
        <div className="flex items-center justify-center flex-wrap md:flex-nowrap">
            {bootomPictures.map((picture) => (
                <picture key={picture.id} className="w-full h-full object-cover flex-[0_1_50%] md:flex-auto" >
                    <source srcSet={picture.desktop} type="image/jpg" media="(375px < width)" />
                    <source srcSet={picture.mobile} type="image/jpg" media="(width <= 375px)" />
                    <img src={picture.desktop} alt="" />
                </picture>
            ))}
        </div>
    )
};

export default BottomGrid;