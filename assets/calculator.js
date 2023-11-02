class Calculator {
  constructor(previousOperand, currentOperand) {
    this.previousOperand = previousOperand;
    this.currentOperand = currentOperand;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {}

  chooseOperation(operation) {}
  compute() {}

  updateDisplay() {}
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-action]");
const equalsButton = document.querySelector("[data-equal]");
const clearButton = document.querySelector("[data-clear]");
const delButton = document.querySelector("[data-del]");
const previousOperand = document.querySelector("[data-previous-operant]");
const currentOperand = document.querySelector("[data-current-operant]");
