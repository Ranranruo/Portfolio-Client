import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
        color: inherit;
    }
`;

export default ResetStyles;