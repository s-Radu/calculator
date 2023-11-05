const previousOperandTextElement = document.querySelector(
  "[data-previous-operant]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operant]"
);
const clearButton = document.querySelector("[data-clear]");
const delButton = document.querySelector("[data-del]");
const equalButton = document.querySelector("[data-equal]");
const mathButtons = document.querySelectorAll("[data-action]");
const numberButtons = document.querySelectorAll("[data-number]");

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.currentOperandTextElement = currentOperandTextElement;
    this.previousOperandTextElement = previousOperandTextElement;
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
    this.currentOperand = number;
  }

  chooseOperation(operation) {
    if ((this.currentOperand = "")) return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let operation;
    const prev = parseFloat(this.previousOperand);
    const curr = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (this.operation) {
      case "+":
        operation = prev + curr;
        break;
      case "-":
        operation = prev - curr;
        break;
      case "*":
        operation = prev * curr;
        break;
      case "÷":
        operation = prev / curr;
        break;
      default:
        break;
    }
    this.currentOperand = operation;
    operation = undefined;
    this.currentOperand = "";
  }
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;

    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerHTML = getDisplayNumber(
      this.currentOperand
    );
    if (this.operation !== "") {
      this.previousOperandTextElement.innerHTML = getDisplayNumber(
        `${this.currentOperand} ${this.operation}`
      );
    } else {
      this.previousOperandTextElement = "";
    }
  }
}

const calculator = new Calculator(
  currentOperandTextElement,
  previousOperandTextElement
);

clearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});
delButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerHTML);
    calculator.updateDisplay();
  });
});

equalButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

mathButtons.forEach((button) => {
  button.addEventListener("click", (button) => {
    calculator.chooseOperation();
    calculator.updateDisplay();
  });
});
