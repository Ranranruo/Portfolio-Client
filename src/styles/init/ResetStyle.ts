import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        color: inherit;
        box-sizing: border-box;
    }
`;

export default ResetStyles;