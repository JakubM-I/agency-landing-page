import type { GridPictureProps } from "../types/interfaces";

// interface GridPictureProps {
//     desktopImg: string;
//     mobileImg: string
// }

const GridPicture: React.FC<GridPictureProps> = ({desktopImg, mobileImg}) => {
    return (
        <div className="w-full md:w-1/2 sx:h-[600px]">
            <picture>
                <source srcSet={desktopImg} type="image/jpg" media="(375px < width)" />
                <source srcSet={mobileImg} type="image/jpg" media="(width <= 375px)" />
                <img src={desktopImg} alt="" className="w-full h-full object-cover" />
            </picture>
        </div>
    )
}

export default GridPicture;