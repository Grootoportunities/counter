import React, { useEffect, useState } from "react";
import { Settings } from "./settings/Settings";
import { CounterBoard } from "./counterBoard/CounterBoard";
import { S } from "./_styles";

export const Counter = () => {
  const [value, setValue] = useState<number>(0);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(1);

  useEffect(() => {
    let stringValue = localStorage.getItem("counterValue");

    if (stringValue) {
      let newValue = JSON.parse(stringValue);
      setValue(newValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(value));
  }, [value]);

  const incHandler = () => setValue((prev) => prev + 1);
  const resetHandler = () => setValue(minValue);
  const setHandler = (minValue: number, maxValue: number) => {
    setMinValue(minValue);
    setMaxValue(maxValue);
    setValue(minValue);
  };

  return (
    <S.Counter>
      <Settings setHandler={setHandler} />
      <CounterBoard
        minValue={minValue}
        maxValue={maxValue}
        value={value}
        incHandler={incHandler}
        resetHandler={resetHandler}
      />
    </S.Counter>
  );
};
