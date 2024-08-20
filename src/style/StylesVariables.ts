import { createGlobalStyle } from "styled-components";

interface StylesVariables {
    isDark: boolean;
}

const StylesVariables = createGlobalStyle`
    html{
        // color
        --color--primary01: 154, 102, 255;
    }
`;

export type Color = 'primary01';

export default StylesVariables;