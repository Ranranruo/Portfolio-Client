import { styled } from "styled-components";
import { Color } from "../../../style/StylesVariables";


export interface StyledTextType {
    color?: Color;
}



export const StyledText = styled.p<StyledTextType>`
    color: rgba(var(--color--${props => props.color}));
`;