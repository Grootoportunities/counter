import React from "react";
import { S } from "./_styles";

type ButtonProps = {
  name: string;
  btnDisable: boolean;
  onClickCallback: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  name,
  btnDisable,
  onClickCallback,
}) => {
  const onClickHandler = () => onClickCallback();

  return (
    <S.Button disabled={btnDisable} onClick={onClickHandler}>
      {name}
    </S.Button>
  );
};
