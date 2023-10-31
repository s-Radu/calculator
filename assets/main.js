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

function buttonClasses() {
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
  buttonClasses();
  toggleDarkMode();
});
