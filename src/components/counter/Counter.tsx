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
    let minValue = localStorage.getItem("minValue");
    let maxValue = localStorage.getItem("maxValue");
    let minInputValue = localStorage.getItem("minInputValue");
    let maxInputValue = localStorage.getItem("maxInputValue");

    if (stringValue) {
      let newValue = JSON.parse(stringValue);
      setValue(newValue);
    }
    if (minValue) {
      let newValue = JSON.parse(minValue);
      setMinValue(newValue);
    }
    if (maxValue) {
      let newValue = JSON.parse(maxValue);
      setMaxValue(newValue);
    }
    if (minInputValue) {
      let newValue = JSON.parse(minInputValue);
      setMinInputValue(newValue);
    }
    if (maxInputValue) {
      let newValue = JSON.parse(maxInputValue);
      setMaxInputValue(newValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(value));
    localStorage.setItem("minValue", JSON.stringify(minValue));
    localStorage.setItem("maxValue", JSON.stringify(maxValue));
    localStorage.setItem("minInputValue", JSON.stringify(minInputValue));
    localStorage.setItem("maxInputValue", JSON.stringify(maxInputValue));
  }, [value, minValue, maxValue, minInputValue, maxInputValue]);

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

  const btnDisableCondition =
    minInputValue < 0 ||
    minInputValue === maxInputValue ||
    maxInputValue < minInputValue ||
    (minValue === minInputValue && maxValue === maxInputValue);
  const minInputError = maxInputValue === minInputValue || minInputValue < 0;
  const maxInputError =
    maxInputValue === minInputValue || maxInputValue < minInputValue;
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
  const incDisabled =
    value >= maxInputValue ||
    minValue !== minInputValue ||
    maxValue !== maxInputValue;
  const resDisabled =
    value <= minInputValue ||
    minValue !== minInputValue ||
    maxValue !== maxInputValue;

  return (
    <S.Counter>
      <Settings
        setHandler={setHandler}
        MinValueInputChangeCallback={MinValueInputChange}
        MaxValueInputChangeCallback={MaxValueInputChange}
        minInputValue={minInputValue}
        maxInputValue={maxInputValue}
        btnDisableCondition={btnDisableCondition}
        minInputError={minInputError}
        maxInputError={maxInputError}
      />
      <CounterBoard
        incHandler={incHandler}
        resetHandler={resetHandler}
        message={message}
        errorStyle={errorStyle}
        incDisabled={incDisabled}
        resDisabled={resDisabled}
      />
    </S.Counter>
  );
};
