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
    id?: string;
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
    line1: string;
    line2?: string;
    line3?: string;
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

export interface SectionAdditionalServiceItemProps {
    title: string;
    description: string;
    img: string;
    section: string;
    price: string;
}

export interface SectionAdditionalServiceProps {
    items: SectionAdditionalServiceItemProps[];
    images: ImagesProps;
}

export interface SectionCreativeProcessItemProps {
    section: string;
    title: string;
    description: string;
    img: string;
}

export interface SectionCreativeProcessProps {
    items: SectionCreativeProcessItemProps[];
    images: ImagesProps;
}

export interface SectionValuesItemProps {
    section: string;
    title: string;
    description: string;
    img: string;
}

export interface SectionValuesProps {
    items: SectionValuesItemProps[];
    images: ImagesProps;
}

export interface SectionTeamItemProps {
    section: string;
    name: string;
    position: string;
    description: string;
    img: string;
}

export interface SectionTeamProps {
    items: SectionTeamItemProps[];
    images: ImagesProps;
}

export interface SectionStatisticsItemProps {
    section: string;
    title: string;
    description: string;
}

export interface SectionStatisticsProps {
    items: SectionStatisticsItemProps[];
}

export interface ProjectItemProps {
    section: string;
    featured: boolean;
    category: string;
    searchCategory?: string;
    title: string;
    description: string;
    img: string;
    link?: string;
    tags?: string[];
}

export interface ProjectProps {
    items: ProjectItemProps[];
    images?: ImagesProps;
}

export interface TestimonialItemProps {
    section: string,
    testimonial: string,
    name: string,
    info: string,
    img: string
}

export interface TestimonialProps {
    items: TestimonialItemProps[];
    images?: ImagesProps;
}

export interface OurAproachItemProps {
    section: string;
    title: string;
    line1: string;
    line2?: string;
    list?: string[];
    link?: string;
    img: string;
}

export interface OurAproachProps {
    items: OurAproachItemProps;
    images: ImagesProps;
}

export interface MarketingServiceItemProps {
    section: string;
    title: string;
    description: string;
    list: string[];
    img: string;
}

export interface MarketingServicesProps {
    items: MarketingServiceItemProps[];
    images: ImagesProps;
}

export interface SuccessStoriesItemProps {
    section: string;
    category: string;
    title: string;
    description: string;
    effects: {value: string, title: string}[];
    img: string;
}

export interface SuccessStoriesProps {
    items: SuccessStoriesItemProps[];
    images: ImagesProps;
}

export interface PackagesItemProps {
    type: string;
    title: string;
    price: string;
    time: string;
    list: string[];
    link: string;
    button: string;
}

export interface PackageProps {
    section: string;
    title: string;
    description: string;
    packeges: PackagesItemProps[];
}

export interface PackagesProps {
    items: PackageProps;
}