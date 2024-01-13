const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

// toggle mode
const mode = localStorage.getItem("mode")
if (mode) {
  body.classList.add("dark-mode");
  darkBtn.classList.add("hidden");
  lightBtn.classList.remove("hidden");
}

function toggleModeBtn(params) {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
}

darkBtn.addEventListener("click", () => {
  toggleModeBtn();
  localStorage.setItem("mode", "dark-mode");
});

lightBtn.addEventListener("click", () => {
  localStorage.setItem("mode", "");
  toggleModeBtn();
});
