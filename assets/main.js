// > Global variables

const darkMode = document.querySelectorAll("[data-bs-theme]");
const darkModeBtn = document.getElementById("toggler");
const buttons = document.querySelectorAll("button");
const resultWrapper = document.querySelector(".result-wrapper");

//> Functions

function toggleDarkMode() {
  darkMode.forEach((button) => {
    if (button.dataset.bsTheme === "dark") {
      resultWrapper.classList.remove("text-dark", "bg-light");
      resultWrapper.classList.add("text-light", "bg-dark");
      buttons.forEach((button) => {
        button.classList.remove("text-dark", "bg-light");
        button.classList.add("text-light", "bg-dark");
      });
      button.dataset.bsTheme = "light";
    } else {
      button.dataset.bsTheme = "dark";
      resultWrapper.classList.remove("text-light", "bg-dark");
      resultWrapper.classList.add("text-dark", "bg-light");
      buttons.forEach((button) => {
        button.classList.remove("text-light", "bg-dark");
        button.classList.add("text-dark", "bg-light");
      });
    }
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

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      const key = e.target;
      const action = key.dataset.action;
      if (!action) {
        console.log("number key");
      } else if (
        action === "add" ||
        action === "divide" ||
        action === "multy" ||
        action === "sub"
      ) {
        console.log("operator key");
      } else if (action === "clear") {
        console.log("clear key");
      } else if (action === "del") {
        console.log("del key");
      } else if (action === "decimal") {
        console.log("decimal key");
      } else if (action === "equal") {
        console.log("equal key");
      }
    }
  });
});

//> Event listeners

darkModeBtn.addEventListener("click", () => {
  darkModeBtnChange();
  toggleDarkMode();
});
