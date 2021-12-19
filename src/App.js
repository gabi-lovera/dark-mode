import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes.js";
import Card from "./components/Card";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const text = theme === "light" ? "Dark Mode" : "Light Mode";
  const icon = theme === "light" ? <CgSun size={40} /> : <HiMoon size={40} />;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <h1 className="head" onClick={() => themeToggler()}>
          {text}&nbsp;
          {icon}
        </h1>
        <Card themeToggler={themeToggler} />
        <p className="made">Made by Gabriel</p>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
