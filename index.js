"use strict";

let firstNumber = 12;
let secondNumber = 2;
let currentOperator = "/";

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
