import { login } from "./ApiCalls.js";

const btn = document.getElementsByClassName("submit");
/*
btn[0].onclick = function () {
  console.log("clicked");
  window.location.href = "logged-in.html";
};
*/
console.log("hello");

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const user = document.getElementById("username");
const pass = document.getElementById("password");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = user.value;
  const password = pass.value;
  console.log(username, password);
  login(username, password);
});
