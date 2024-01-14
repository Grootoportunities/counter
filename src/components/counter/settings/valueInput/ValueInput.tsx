import React, { ChangeEvent } from "react";
import { S } from "../_styles";

type ValueInputProps = {
  spanText: string;
  inputError: boolean;
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
        errorMessage={inputError}
      />
    </S.ValueInput>
  );
};
