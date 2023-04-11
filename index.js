"use strict";

let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let shouldClearScreen = false;

const numbersBtn = document.querySelectorAll("#number");
const operatorsBtn = document.querySelectorAll("#operator");
const equalsBtn = document.querySelector(".equal");
const resetBtn = document.querySelector(".reset");
const deleteBtn = document.querySelector("#deleteNum");
const dotBtn = document.querySelector(".dot");
const previousOperationDisplay = document.querySelector(".previousOperation");
const currentOperationDisplay = document.querySelector(".currentOperation");

resetBtn.addEventListener("click", () => resetScreen());
equalsBtn.addEventListener("click", () => evaluateOperation());
deleteBtn.addEventListener("click", () => deleteNumber());

const clearScreen = () => {
  currentOperationDisplay.textContent = "";
  shouldClearScreen = false;
};

const resetScreen = () => {
  currentOperationDisplay.textContent = "0";
  previousOperationDisplay.textContent = "";
  firstNumber = "";
  secondNumber = "";
  currentOperator = null;
};

const deleteNumber = () => {
  currentOperationDisplay.textContent = currentOperationDisplay.textContent
    .toString()
    .slice(0, -1);
};

numbersBtn.forEach((e) => {
  e.addEventListener("click", () => populateNumber(e.textContent));
});

operatorsBtn.forEach((e) => {
  e.addEventListener("click", () => populateOperator(e.textContent));
});

const populateNumber = (num) => {
  if (currentOperationDisplay.textContent === "0" || shouldClearScreen)
    clearScreen();

  currentOperationDisplay.textContent += num;
};

const populateOperator = (opr) => {
  if (currentOperator !== null) evaluateOperation();
  firstNumber = currentOperationDisplay.textContent;
  currentOperator = opr;
  previousOperationDisplay.textContent = `${firstNumber} ${currentOperator}`;
  shouldClearScreen = true;
};

const evaluateOperation = () => {
  if (currentOperator === null || shouldClearScreen) return;
  if (currentOperator === "÷" && currentOperationDisplay.textContent === "0") {
    alert("You can't divide 0 by 0 ....");
    resetScreen();
    return;
  }
  secondNumber = currentOperationDisplay.textContent;
  currentOperationDisplay.textContent = roundCalculation(
    operate(currentOperator, firstNumber, secondNumber)
  );
  previousOperationDisplay.textContent = `${firstNumber} ${currentOperator} ${secondNumber}`;
  currentOperator = null;
};

const roundCalculation = (num) => {
  return Math.round(num * 100) / 100;
};

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const operate = (operator, a, b) => {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "÷":
      if (b === 0) {
        return null;
      } else {
        return divide(a, b);
      }
    default:
      return null;
  }
};
