import React, { ChangeEvent } from "react";
import { S } from "../_styles";

type ValueInputProps = {
  spanText: string;
  inputError: string;
  value: number;

  valueChangeCallback: (value: number) => void;
};

export const ValueInput: React.FC<ValueInputProps> = ({
  spanText,
  valueChangeCallback,
  value,
  inputError,
}) => {
  const onValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    valueChangeCallback(Number(e.currentTarget.value));

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
