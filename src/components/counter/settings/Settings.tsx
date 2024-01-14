import React from "react";
import { ValueInput } from "./valueInput/ValueInput";
import { Button } from "../../button/Button";
import { S } from "./_styles";

type SettingsProps = {
  maxValue: number;
  minValue: number;

  onMaxValueChange: (maxValue: number) => void;
  onMinValueChange: (minValue: number) => void;

  setHandler: () => void;
};

export const Settings: React.FC<SettingsProps> = ({
  maxValue,
  minValue,
  onMaxValueChange,
  onMinValueChange,
  setHandler,
}) => {
  const onMaxValueChangeHandler = (minValue: number) =>
    onMaxValueChange(minValue);
  const onMinValueChangeHandler = (maxValue: number) =>
    onMinValueChange(maxValue);

  const btnDisable =
    minValue < 0 || minValue === maxValue || maxValue < minValue;
  const minInputError =
    maxValue === minValue || minValue < 0 ? "inputError" : "";
  const maxInputError =
    maxValue === minValue || maxValue < minValue ? "inputError" : "";

  return (
    <S.Settings>
      <S.InputsWrapper>
        <ValueInput
          spanText={"Max value:"}
          value={maxValue}
          inputError={maxInputError}
          valueChangeCallback={onMaxValueChangeHandler}
        />
        <ValueInput
          spanText={"Min value:"}
          value={minValue}
          inputError={minInputError}
          valueChangeCallback={onMinValueChangeHandler}
        />
      </S.InputsWrapper>
      <Button
        btnName={"Set"}
        btnDisable={btnDisable}
        onClickCallback={setHandler}
      />
    </S.Settings>
  );
};
