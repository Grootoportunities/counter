import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { S } from "../_styles";

type ValueInputProps = {
  spanText: string;

  value: number;
  maxValue: number;
  minValue: number;

  valueChangeCallback: (value: number) => void;
};

export const ValueInput: React.FC<ValueInputProps> = ({
  spanText,
  maxValue,
  minValue,
  valueChangeCallback,
  value,
}) => {
  const onValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    valueChangeCallback(Number(e.currentTarget.value));

  const inputError =
    maxValue < minValue || maxValue === minValue ? "inputError" : "";

  return (
    <S.ValueInput>
      <S.Span>{spanText}</S.Span>
      <S.Input
        type={"number"}
        value={value}
        onChange={onValueChangeHandler}
        className={inputError}
      />
    </S.ValueInput>
  );
};
