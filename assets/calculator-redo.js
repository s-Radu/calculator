class Calculator {
  constructor(previousOperandElement, currentOperandElement) {
    this.previousOperandElement = previousOperandElement;
    this.currentOperandElement = currentOperandElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumbers(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== null) {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const curr = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (this.operation) {
      case "÷":
        computation = prev / curr;
        break;
      case "*":
        computation = prev * curr;
        break;
      case "+":
        computation = prev + curr;
        break;
      case "-":
        computation = prev - curr;
        break;
      default:
        break;
    }
    this.currentOperand = computation;
    this.previousOperand = "";
    this.operation = undefined;
  }

  updateDisplay() {
    this.currentOperandElement.textContent = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandElement.textContent = `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOperandElement.textContent = "";
    }
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

clearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumbers(button.textContent);
    calculator.updateDisplay();
  });
});

delButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});

equationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.textContent);
    calculator.updateDisplay();
  });
});

equalButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

//* in obisidian we have pseudocode for the whole calculator.
