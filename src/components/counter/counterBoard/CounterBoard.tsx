import React from "react";
import { Button } from "../../button/Button";
import { S } from "./_styles";

type CounterBoardProps = {
  minValue: number;
  maxValue: number;
  minInputValue: number;
  maxInputValue: number;
  value: number;

  incHandler: () => void;
  resetHandler: () => void;
};

export const CounterBoard: React.FC<CounterBoardProps> = ({
  minValue,
  maxValue,
  minInputValue,
  maxInputValue,
  value,
  incHandler,
  resetHandler,
}) => {
  const message =
    minInputValue === maxInputValue
      ? "Max and min values can't be equal!"
      : maxInputValue < minInputValue
        ? "Max value can't be less than min value!"
        : minInputValue < 0
          ? "Min value can't be negative!"
          : minValue !== minInputValue || maxValue !== maxInputValue
            ? "Enter values and press 'set'"
            : value;

  const errorStyle =
    minInputValue === maxInputValue ||
    maxInputValue < minInputValue ||
    value === maxValue ||
    minInputValue < 0;

  const incDisabled = value >= maxInputValue;
  const resDisabled = value <= minInputValue;

  return (
    <S.CounterBoard>
      <S.Score
        //className={errorStyle}
        error={errorStyle}
      >
        {message}
      </S.Score>
      <S.ButtonsWrapper>
        <Button
          name={"Increment"}
          btnDisable={incDisabled}
          onClickCallback={incHandler}
        />
        <Button
          name={"Reset"}
          btnDisable={resDisabled}
          onClickCallback={resetHandler}
        />
      </S.ButtonsWrapper>
    </S.CounterBoard>
  );
};
