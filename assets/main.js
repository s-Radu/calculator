const darkMode = document.querySelectorAll("[data-bs-theme]");
const darkModeBtn = document.getElementById("toggler");

//> Functions
function toggleDarkMode() {
  darkMode.forEach((button) => {
    if (button.dataset.bsTheme === "dark") {
      button.dataset.bsTheme = "light";
    } else {
      button.dataset.bsTheme = "dark";
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
