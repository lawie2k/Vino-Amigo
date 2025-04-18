const SignUpButton = document.getElementById("sign-up");
const SignInButton = document.getElementById("sign-in");
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

SignUpButton.addEventListener("click", function () {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

SignInButton.addEventListener("click", function () {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});
