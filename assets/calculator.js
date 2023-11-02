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

  appendNumber(number) {
    this.currentOperand = number;
  }

  chooseOperation(operation) {}
  compute() {}

  updateDisplay() {
    this.currentOperand.innerText = this.currentOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-action]");
const equalsButton = document.querySelector("[data-equal]");
const clearButton = document.querySelector("[data-clear]");
const delButton = document.querySelector("[data-del]");
const previousOperand = document.querySelector("[data-previous-operant]");
const currentOperand = document.querySelector("[data-current-operant]");

const calculator = new Calculator(previousOperand, currentOperand);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
