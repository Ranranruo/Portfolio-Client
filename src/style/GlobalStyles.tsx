import { useSelector } from "react-redux";
import { DarkModeType } from "../store/darkModeSlice";
import { StoreType } from "../store/store";
import CSSVariable from "./CSSVariables";
import ResetStyles from "./ResetStyle";

const GlobalStyles: React.FC = () => {
    const isDark:DarkModeType = useSelector((state:StoreType)=>state.darkMode);
    return (
        <>
            <ResetStyles />
            <CSSVariable isDark={isDark} />
        </>
    )
}
export default GlobalStyles;