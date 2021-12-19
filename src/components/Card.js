import { Button, Container } from "../styles/styledComponents";
import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Checkbox from "./Checkbox";
import Time from "./Time";

const Card = ({ themeToggler }) => {
  const themeContext = useContext(ThemeContext);
  const CardForm = styled.div`
    width: 30%;
    height: 300px;
    border-radius: 3px;
    padding: 0.8em 1em;
    background-color: ${themeContext.cardColor};
  `;

  const Input = styled.input`
    width: 100%;
    height: 3em;
    margin-top: 1em;
    border: none;
    background-color: ${themeContext.inputColor};
  `;
  
  return (
    <Container>
      <CardForm>
        <Checkbox themeToggler={themeToggler} />
        <Time />
        <Input />
        <Input />
        <Button />
      </CardForm>
    </Container>
  );
};

export default Card;
