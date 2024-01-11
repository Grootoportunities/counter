import React from "react";
import { S } from "./_styles";

type ButtonProps = {
  btnName: string;
  btnDisable: any;
  onClickCallback: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  btnName,
  btnDisable,
  onClickCallback,
}) => {
  const onClickHandler = () => onClickCallback();

  return (
    <S.Button disabled={btnDisable} onClick={onClickHandler}>
      {btnName}
    </S.Button>
  );
};
