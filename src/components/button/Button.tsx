import React from "react";
import { S } from "./_styles";

type ButtonProps = {
  name: string;
  disabled: boolean;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ name, disabled, onClick }) => {
  const onClickHandler = () => onClick();

  return (
    <S.Button disabled={disabled} onClick={onClickHandler}>
      {name}
    </S.Button>
  );
};
