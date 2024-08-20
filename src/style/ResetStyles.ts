import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
        color: inherit;
    }
`
export default ResetStyles;