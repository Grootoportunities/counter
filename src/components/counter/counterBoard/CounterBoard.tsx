import React from "react";
import { Button } from "../../button/Button";
import { S } from "./_styles";

type CounterBoardProps = {
  message: string | number;
  errorStyle: boolean;
  incDisabled: boolean;
  resDisabled: boolean;

  incHandler: () => void;
  resetHandler: () => void;
};

export const CounterBoard: React.FC<CounterBoardProps> = ({
  message,
  errorStyle,
  incDisabled,
  resDisabled,
  incHandler,
  resetHandler,
}) => {
  return (
    <S.CounterBoard>
      <S.Score error={errorStyle}>{message}</S.Score>
      <S.ButtonsWrapper>
        <Button
          name={"Increment"}
          disabled={incDisabled}
          onClick={incHandler}
        />
        <Button name={"Reset"} disabled={resDisabled} onClick={resetHandler} />
      </S.ButtonsWrapper>
    </S.CounterBoard>
  );
};
