export interface HeaderProps{
    isSticky?: boolean;
}

export interface HeaderBgProps {
    relative: string;
    sticky: string;
}

export interface HeaderStylesProps{
    [key: string]: HeaderBgProps;
}

export interface getHeaderBgProps {
    pathname: string;
    isSticky: boolean;
}

export interface MenuBarProps{
    isSticky?: boolean;
}

export interface MenuProps {
    toggleMenu: () => void;
}

export interface NavItemsProps {
    id: string;
    to: string;
    label: string;
    type: "link" | "button";
    className?: string;
    classNameMobile?: string;
    itemClassName?: string;
}

export interface NavItemsProps {
    id: string;
    to: string;
    label: string;
    type: "link" | "button";
    className?: string;
    classNameMobile?: string;
    itemClassName?: string;
}

export interface HeroSectionItemsProps {
    section: string;
    title: string; 
    subtitle?: string | undefined; 
    arrow?: string | undefined;
    textColor?: string;
    desktopImg: string; 
    mobileImg: string;
}

// export interface HeroSectionItemsProps {
//     headerDesktopBg: string; 
//     headerMobileBg: string;
//     headerTitle: string; 
//     headerSubtitle?: string | undefined; 
//     headerArrow?: string | undefined;
//     heroTextColor?: string;
// }

export interface HeroProps {
    headerTitle: string; 
    headerSubtitle?: string | undefined ;
    headerArrow?: string | undefined; 
    heroTextColor?: string;
}

export interface ImagesHeroProps {
  [section: string]: {
    [imgType: string]: string;
  };
};

export interface SectionHeroProps{
    items: HeroSectionItemsProps;
    images: ImagesHeroProps;
}

export interface SectionTitleProps {
    title: string;
    styling?: string;
}

export interface BottomPicturesProps {
    id: number;
    desktop: string;
    mobile: string;
}

export interface GridPictureProps {
    desktopImg: string | undefined;
    mobileImg: string | undefined;
}

export interface GridTextCellProps {
    children: React.ReactNode;
    styling?: string;
}




export interface ClientsProps {
    name: string;
    role: string;
    testimonial: string;
    photo: string;
}

export interface SectionIntroItemsProps {
    section: string;
    title: string;
    txtLine1: string;
    txtLine2?: string;
    txtLine3?: string;
}

export interface SectionIntroProps{
    items: SectionIntroItemsProps
}

export interface SectionCtaItemsProps {
    section: string;
    title: string;
    txtLine: string;
    btnText: string;
}

export interface SectionCtaProps {
    items: SectionCtaItemsProps
}

export interface SecttionGtidItemsProps{
    title: string;
    description: string;
    list?: string[];
    img?: string;
    section: string;
    link?: string;
}

export interface ImagesProps {
    [section: string]: {
        [img: string]: string;
    };
};

export interface SectionGridProps {
    items: SecttionGtidItemsProps[];
    images: ImagesProps
}