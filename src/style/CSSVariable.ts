import { createGlobalStyle } from "styled-components";
import { DarkModeType } from "../store/darkModeSlice";

type CSSVariableType = {
    isDark: DarkModeType
}

/**
 * Define global CSS variables
 */
const CSSVariable = createGlobalStyle<CSSVariableType>`
    :root{
        --color--primary01: 154, 102, 255;
    }
`;

export default CSSVariable;