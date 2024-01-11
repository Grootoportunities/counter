import styled from "styled-components";
import { Settings } from "../settings/_styles";

const CounterBoard = styled(Settings)``;

const ButtonsWrapper = styled(Settings)`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const Score = styled.h3`
  padding: 30px;

  font-weight: 600;
  font-family: "Montserrat", sans-serif;

  border: 2px solid deepskyblue;
  border-radius: 10px;

  text-align: center;

  min-width: 200px;
`;

export const S = { CounterBoard, ButtonsWrapper, Score };
