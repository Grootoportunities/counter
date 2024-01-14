import React, { useState } from "react";
import { ValueInput } from "./valueInput/ValueInput";
import { Button } from "../../button/Button";
import { S } from "./_styles";

type SettingsProps = {
  setHandler: (minValue: number, maxValue: number) => void;
};

export const Settings: React.FC<SettingsProps> = ({ setHandler }) => {
  const [minInputValue, setMinInputValue] = useState<number>(0);
  const [maxInputValue, setMaxInputValue] = useState<number>(1);

  const onMaxValueChangeHandler = (maxValue: number) =>
    setMaxInputValue(maxValue);
  const onMinValueChangeHandler = (minValue: number) =>
    setMinInputValue(minValue);

  const onClickCallbackHandler = () => {
    setHandler(minInputValue, maxInputValue);
  };

  const btnDisable =
    minInputValue < 0 ||
    minInputValue === maxInputValue ||
    maxInputValue < minInputValue;
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
