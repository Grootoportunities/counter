import styled from "styled-components";

const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 600;

  border: 1px solid black;
  border-radius: 10px;

  background-color: deepskyblue;
  max-width: 200px;
  width: 100%;

  transition: 0.2s ease-in-out;

  &:hover {
    background-color: cyan;
  }
`;

export const S = { Button };
