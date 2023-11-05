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
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand += number;
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        this.currentOperand = (prev + current).toString();
        break;
      case "-":
        this.currentOperand = (prev - current).toString();
        break;
      case "*":
        this.currentOperand = (prev * current).toString();
        break;
      case "÷":
        this.currentOperand = (prev / current).toString();
        break;
      default:
        return;
    }

    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const [integerDigits, decimalDigits] = stringNumber.split(".");
    let integerDisplay = isNaN(integerDigits)
      ? ""
      : integerDigits.toLocaleString("en", { maximumFractionDigits: 0 });
    return decimalDigits != null
      ? `${integerDisplay}.${decimalDigits}`
      : integerDisplay;
  }

  updateDisplay() {
    this.currentOperandElement.textContent = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandElement.textContent = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandElement.textContent = "";
    }
  }
}

function setupCalculator() {
  const previousOperandElement = document.querySelector(
    "[data-previous-operant]"
  );
  const currentOperandElement = document.querySelector(
    "[data-current-operant]"
  );
  const calculator = new Calculator(
    previousOperandElement,
    currentOperandElement
  );

  document.querySelectorAll("[data-number]").forEach((button) => {
    button.addEventListener("click", () => {
      calculator.appendNumber(button.textContent);
      calculator.updateDisplay();
    });
  });

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      calculator.chooseOperation(button.textContent);
      calculator.updateDisplay();
    });
  });

  document.querySelector("[data-equal]").addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
  });

  document.querySelector("[data-clear]").addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
  });

  document.querySelector("[data-del]").addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
  });
}

setupCalculator();
