import React from "react";
import { Button } from "../../button/Button";
import { S } from "./_styles";

type CounterBoardProps = {
  minValue: number;
  maxValue: number;
  value: number;

  incHandler: () => void;
  resetHandler: () => void;
};

export const CounterBoard: React.FC<CounterBoardProps> = ({
  minValue,
  maxValue,
  value,
  incHandler,
  resetHandler,
}) => {
  const errorMessage =
    minValue === maxValue
      ? "Max and min values can't be equal!"
      : maxValue < minValue
        ? "Max value can't be less than min value!"
        : minValue < 0
          ? "Min value can't be negative!"
          : value;

  const errorStyle =
    minValue === maxValue ||
    maxValue < minValue ||
    value === maxValue ||
    minValue < 0
      ? "headerError"
      : "";

  const incDisabled = value >= maxValue;
  const resDisabled = value <= minValue;

  return (
    <S.CounterBoard>
      <S.Score className={errorStyle}>{errorMessage}</S.Score>
      <S.ButtonsWrapper>
        <Button
          btnName={"Increment"}
          btnDisable={incDisabled}
          onClickCallback={incHandler}
        />
        <Button
          btnName={"Reset"}
          btnDisable={resDisabled}
          onClickCallback={resetHandler}
        />
      </S.ButtonsWrapper>
    </S.CounterBoard>
  );
};
