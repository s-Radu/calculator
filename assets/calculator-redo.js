//* Calculator class with the following functions insider:

class Calculator {
  //> Inside the constructor we have passed the elements that will be displayed on the user display,
  //> Are passed with THIS keyword, so when we initialise the calculator it's recognised and works straight on

  constructor(previousOperandElement, currentOperandElement) {
    this.currentOperandElement = currentOperandElement;
    this.previousOperandElement = previousOperandElement;
  }
}

// * Clear

//* Delete

//* AppendNumbers

//* calculate

//* update display

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

//* Hook all the functions to the buttons above with event listeners for the user interaction
