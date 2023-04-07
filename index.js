"use strict";

let firstNumber = 0;
let secondNumber = 0;
let currentOperator = "";

const numbersBtn = document.querySelectorAll("#number");
const operatorsBtn = document.querySelectorAll("#operator");
const equalsBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector("#deleteNum");
const dotBtn = document.querySelector(".dot");
const previousOperationDisplay = document.querySelector(".previousOperation");
const currentOperationDisplay = document.querySelector(".currentOperation");

numbersBtn.forEach((e) => {
  e.addEventListener("click", () => populateNumber(e.textContent));
});

operatorsBtn.forEach((e) => {
  e.addEventListener("click", () => populateOperator(e.textContent));
});

const populateNumber = (number) => {
  currentOperationDisplay.textContent += number;
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
  switch (operator) {
    case "+":
      console.log(add(a, b));
      break;
    case "-":
      console.log(subtract(a, b));
      break;
    case "*":
      console.log(multiply(a, b));
      break;
    case "/":
      console.log(divide(a, b));
      break;
    default:
  }
};

operate(currentOperator, firstNumber, secondNumber);
