import { useSelector } from "react-redux";
import { DarkModeType } from "../store/darkModeSlice";
import { StoreType } from "../store/store";
import CSSVariable from "./CSSVariable";
import ResetStyles from "./ResetStyle";

// GlobalStyles Component
/**
 * 전역 스타일 적용 컴포넌트
 * - reset css
 * - css variable
 * @returns Globalstyles Components
 */
const GlobalStyles: React.FC = () => {
    // get darkMode state from redux store 
    const isDark:DarkModeType = useSelector((state:StoreType)=>state.darkMode);
    return (
        <>
            <ResetStyles />
            <CSSVariable isDark={isDark} />
        </>
    )
}
export default GlobalStyles;