import { StyledText, StyledTextType } from "./StyledText";

interface TextPropsType extends StyledTextType {
    children: string;
}

const Text: React.FC<TextPropsType> = ({
    children,
    color,
}) => <StyledText color={color}>{children}</StyledText>

export default Text;