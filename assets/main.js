// > Global variables

const darkMode = document.querySelectorAll("[data-bs-theme]");
const darkModeBtn = document.getElementById("toggler");
const resultWrapper = document.querySelector(".result-wrapper");
const buttons = document.querySelectorAll("button");
const darkModeElements = document.querySelectorAll(".dark-mode-element");

//> Functions

function toggleDarkMode() {
  darkMode.forEach((button) => {
    if (button.dataset.bsTheme === "dark") {
      darkModeOn();
      button.dataset.bsTheme = "light";
    } else {
      darkModeOff();
      button.dataset.bsTheme = "dark";
    }
  });
}

function darkModeOff() {
  resultWrapper.classList.remove("text-light", "bg-dark");
  resultWrapper.classList.add("text-dark", "bg-light");

  buttons.forEach((button) => {
    button.classList.remove("text-light", "bg-dark");
    button.classList.add("text-dark", "bg-light");
  });

  darkModeElements.forEach((element) => {
    element.classList.remove("bg-light", "text-dark");
    element.classList.add("text-light");
  });
}

function darkModeOn() {
  resultWrapper.classList.remove("text-dark", "bg-light");
  resultWrapper.classList.add("text-light", "bg-dark");

  buttons.forEach((button) => {
    button.classList.remove("text-dark", "bg-light");
    button.classList.add("text-light", "bg-dark");
  });

  darkModeElements.forEach((element) => {
    element.classList.remove("text-light");
    element.classList.add("bg-light", "text-dark");
  });
}

function darkModeBtnChange() {
  if (darkModeBtn.classList.contains("bi-moon-stars")) {
    darkModeBtn.classList.remove("bi-moon-stars");
    darkModeBtn.classList.add("bi-brightness-high");
  } else {
    darkModeBtn.classList.remove("bi-brightness-high");
    darkModeBtn.classList.add("bi-moon-stars");
  }
}

//> Event listeners

darkModeBtn.addEventListener("click", () => {
  darkModeBtnChange();
  toggleDarkMode();
});
