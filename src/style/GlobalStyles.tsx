import { useSelector } from "react-redux";
import { StoreType } from "../store/store";
import ResetStyles from "./ResetStyles";
import StylesVariables from "./StylesVariables";

const GlobalStyles: React.FC = () => {
  const isDark = useSelector((state: StoreType) => state.darkMode);
  return (
    <>
      <ResetStyles />
      <StylesVariables isDark={isDark}/>
    </>
  );
};
export default GlobalStyles;
