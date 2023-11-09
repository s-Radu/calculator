class Calculator {
  constructor(previousOperandElement, currentOperandElement) {
    this.previousOperandElement = previousOperandElement;
    this.currentOperandElement = currentOperandElement;
  }

  clear() {}

  delete() {}

  appendNumbers(number) {}

  chooseOperation(operation) {}

  calclate() {}

  updateDisplay() {}
}

const previousOperandElement = document.querySelector(
  "[data-previous-operant]"
);
const currentOperandElement = document.querySelector("[data-current-operant]");
const clearButton = document.querySelector("[data-clear]");
const delButton = document.querySelector("[data-del]");
const equationButtons = document.querySelectorAll("[data-action]");
const numberButtons = document.querySelectorAll("[data-number]");
const equalButton = document.querySelector("[data-equal]");
