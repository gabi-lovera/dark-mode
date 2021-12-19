import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#ECECEC",
  fontColor: "#000",
  cardColor: "#fff",
  inputColor: "#ECECEC",
  checked: false,
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  cardColor: "#1E1E1E",
  inputColor: "#858585",
  checked: true,
};

export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};

	}

`;
