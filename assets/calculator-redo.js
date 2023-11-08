//* Calculator class with the following functions insider:

class Calculator {
  //> Inside the constructor we have passed the elements that will be displayed on the user display,
  //> Are passed with THIS keyword, so when we initialise the calculator it's recognised and works straight on

  constructor(previousOperandElement, currentOperandElement) {
    this.currentOperandElement = currentOperandElement;
    this.previousOperandElement = previousOperandElement;
    this.clear();

    // < When the new calculator is initialised on the user's interface, the clear function will be called straight away so we will have a clean calculator to start with
  }
  // * Clear
  clear() {
    //< currentOperand and previousOperand are gonna be the objects that we are gonna use to store the infirmation before it gets displayed on user's screen
    //< there are created *on the fly* and used as we need them.
    //< these are actually Calculator's variables, same as this.previousOperandElement and this.currentOperandElement

    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  //* Delete

  delete() {}

  //* chooseOperaion
  //< Forgot about this function :(

  chooseOperation(operation) {}

  //* AppendNumbers

  appendNumbers(number) {
    //> Everything that happens inside of this funtion will result in appending the numbers clicked by the user to the calculator's screen

    //> Checking if the period exists in the number and if so, we can't add another one

    if (number === "." && this.currentOperand.includes(".")) return;

    //> calling toString() on this currentOperand and on the number, allows us to transform the numbers that are typed by the user into a string of numbers, and later be converted again into numbers alone so the math can be processed.

    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  //* calculate

  calculate() {}

  //* update display

  updateDisplay() {
    this.currentOperandElement.innerText = this.currentOperand;
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

//* Initialise the calculator class
//> when we call the calculator under a new constant we use the new keyword and we pass the same two elemtns that are gonna be displayed on the user's screen
const calculator = new Calculator(
  previousOperandElement,
  currentOperandElement
);

//* Hook all the functions to the buttons above with event listeners for the user interaction

clearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

//> With the below, the number that gets pressed is added to appendNumbers

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumbers(button.innerText);
    calculator.updateDisplay();
  });
});
