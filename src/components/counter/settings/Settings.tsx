import React from "react";
import { ValueInput } from "./valueInput/ValueInput";
import { Button } from "../../button/Button";
import { S } from "./_styles";

type SettingsProps = {
  btnDisableCondition: boolean;
  minInputError: boolean;
  maxInputError: boolean;

  minInputValue: number;
  maxInputValue: number;

  setHandler: () => void;
  MinValueInputChangeCallback: (minInputValue: number) => void;
  MaxValueInputChangeCallback: (maxInputValue: number) => void;
};

export const Settings: React.FC<SettingsProps> = ({
  btnDisableCondition,
  minInputError,
  maxInputError,
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
        name={"Set"}
        disabled={btnDisableCondition}
        onClick={onClickCallbackHandler}
      />
    </S.Settings>
  );
};
