import React, { ChangeEvent } from "react";
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
    minValue < 0 ||
    maxValue < 1 ||
    minValue === maxValue ||
    maxValue < minValue;

  return (
    <S.Settings>
      <S.InputsWrapper>
        <ValueInput
          spanText={"Max value:"}
          value={maxValue}
          maxValue={maxValue}
          minValue={minValue}
          valueChangeCallback={onMaxValueChangeHandler}
        />
        <ValueInput
          spanText={"Min value:"}
          value={minValue}
          maxValue={maxValue}
          minValue={minValue}
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
