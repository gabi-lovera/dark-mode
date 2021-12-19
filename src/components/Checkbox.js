import {
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel,
} from "../styles/styledComponents";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Checkbox = ({ themeToggler }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <CheckBoxWrapper>
      <CheckBox
        id="checkbox"
        type="checkbox"
        checked={themeContext.checked}
        onClick={() => themeToggler()}
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

export default Checkbox;
