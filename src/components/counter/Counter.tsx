import React, { useEffect, useState } from "react";
import { Settings } from "./settings/Settings";
import { CounterBoard } from "./counterBoard/CounterBoard";
import { S } from "./_styles";

export const Counter = () => {
  const [value, setValue] = useState<number>(0);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(1);
  const [minInputValue, setMinInputValue] = useState<number>(0);
  const [maxInputValue, setMaxInputValue] = useState<number>(1);

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

  const MinValueInputChange = (minInputValue: number) =>
    setMinInputValue(minInputValue);
  const MaxValueInputChange = (maxInputValue: number) =>
    setMaxInputValue(maxInputValue);

  const setHandler = () => {
    setMinValue(minInputValue);
    setMaxValue(maxInputValue);
    setValue(minInputValue);
  };

  return (
    <S.Counter>
      <Settings
        setHandler={setHandler}
        MinValueInputChangeCallback={MinValueInputChange}
        MaxValueInputChangeCallback={MaxValueInputChange}
        minInputValue={minInputValue}
        maxInputValue={maxInputValue}
        minValue={minValue}
        maxValue={maxValue}
      />
      <CounterBoard
        minValue={minValue}
        maxValue={maxValue}
        minInputValue={minInputValue}
        maxInputValue={maxInputValue}
        value={value}
        incHandler={incHandler}
        resetHandler={resetHandler}
      />
    </S.Counter>
  );
};
