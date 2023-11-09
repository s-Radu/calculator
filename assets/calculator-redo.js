class Calculator {
  constructor(previousOperandElement, currentOperandElement) {
    this.previousOperandElement = previousOperandElement;
    this.currentOperandElement = currentOperandElement;
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumbers(number) {
    this.currentOperand = number;
  }

  chooseOperation(operation) {}

  calclate() {}

  updateDisplay() {
    this.currentOperandElement.textContent = this.currentOperand;
  }
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

const calculator = new Calculator(
  previousOperandElement,
  currentOperandElement
);

clearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumbers(button.textContent);
    calculator.updateDisplay();
  });
});
