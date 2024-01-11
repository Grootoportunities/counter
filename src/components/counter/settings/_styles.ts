import styled from "styled-components";

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  border: 3px solid deepskyblue;
  border-radius: 10px;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding: 10px;

  border: 3px solid deepskyblue;
  border-radius: 10px;

  margin-bottom: 30px;
`;

const ValueInput = styled.div`
  display: flex;
  gap: 15px;

  align-items: center;
`;
const Input = styled.input`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  border-radius: 10px;
  border: 2px solid deepskyblue;
`;
const Span = styled.span`
  font-size: 20px;
`;

export const S = { Settings, InputsWrapper, ValueInput, Input, Span };
