import React from "react";
import { ValueInput } from "./valueInput/ValueInput";
import { Button } from "../../button/Button";
import { S } from "./_styles";

type SettingsProps = {
  minValue: number;
  maxValue: number;
  minInputValue: number;
  maxInputValue: number;

  setHandler: () => void;
  MinValueInputChangeCallback: (minInputValue: number) => void;
  MaxValueInputChangeCallback: (maxInputValue: number) => void;
};

export const Settings: React.FC<SettingsProps> = ({
  minValue,
  maxValue,
  minInputValue,
  maxInputValue,
  setHandler,
  MinValueInputChangeCallback,
  MaxValueInputChangeCallback,
}) => {
  const onMaxValueChangeHandler = (maxValue: number) =>
    MaxValueInputChangeCallback(maxValue);
  const onMinValueChangeHandler = (minValue: number) =>
    MinValueInputChangeCallback(minValue);
  const onClickCallbackHandler = () => setHandler();

  const btnDisable =
    minInputValue < 0 ||
    minInputValue === maxInputValue ||
    maxInputValue < minInputValue ||
    (minValue === minInputValue && maxValue === maxInputValue);
  const minInputError =
    maxInputValue === minInputValue || minInputValue < 0 ? "inputError" : "";
  const maxInputError =
    maxInputValue === minInputValue || maxInputValue < minInputValue
      ? "inputError"
      : "";

  return (
    <S.Settings>
      <S.InputsWrapper>
        <ValueInput
          spanText={"Max value:"}
          value={maxInputValue}
          inputError={maxInputError}
          valueChangeCallback={onMaxValueChangeHandler}
        />
        <ValueInput
          spanText={"Min value:"}
          value={minInputValue}
          inputError={minInputError}
          valueChangeCallback={onMinValueChangeHandler}
        />
      </S.InputsWrapper>
      <Button
        btnName={"Set"}
        btnDisable={btnDisable}
        onClickCallback={onClickCallbackHandler}
      />
    </S.Settings>
  );
};
