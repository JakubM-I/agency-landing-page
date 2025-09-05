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

export interface HeroSectionProps {
    headerDesktopBg: string; 
    headerMobileBg: string;
    headerTitle: string; 
    headerSubtitle?: string | undefined; 
    headerArrow?: string | undefined;
    heroTextColor?: string;
}

export interface HeroProps {
    headerTitle: string; 
    headerSubtitle?: string | undefined ;
    headerArrow?: string | undefined; 
    heroTextColor?: string;
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
    desktopImg: string;
    mobileImg: string
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

export interface SectionIntroProps {
    title: string;
    txtLine1: string;
    txtLine2?: string;
    txtLine3?: string;
}

export interface CtaSectionProps {
    title: string;
    txtLine: string;
    btnText: string;
}