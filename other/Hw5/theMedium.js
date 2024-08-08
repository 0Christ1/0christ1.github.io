const loginButton = document.querySelector("#loginButton");
loginButton.addEventListener("click", () => {
  window.location.href =
    "https://github.com/rebleo/webDev_Fall2023/wiki/Week-09";
});

const clearButton = document.querySelector("#clearButton");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
clearButton.addEventListener("click", () => {
  usernameInput.value = "";
  passwordInput.value = "";
});
