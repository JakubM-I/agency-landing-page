import type { GridTextCellProps } from "../types/interfaces";

const GridTextCell: React.FC<GridTextCellProps> = ({ children, styling }) => {
    return (
        <div className={`w-full md:w-1/2 flex flex-nowrap justify-center items-center px-6 py-16 sx:py-[67px] ${styling ? styling: ""}`}>
            {children}
        </div>
    )
}
export default GridTextCell;