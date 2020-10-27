import { login } from "./ApiCalls.js";

const btn = document.getElementsByClassName("submit");
const store = window.localStorage
/*
btn[0].onclick = function () {
  console.log("clicked");
  window.location.href = "logged-in.html";
};
*/
//console.log("hello");

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const user = document.getElementById("username");
const pass = document.getElementById("password");

const isLoggedIn = async () => {
  const token = await store.getItem('token');
  console.log(token);
  if(!token) {
    console.log("no token")
  } else if(token) {
    console.log(token)
    console.log("Yes token")
  }
}


loginButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const username = user.value;
  const password = pass.value;
  
  try {
  await login(username, password);
  console.log(username, password);
  window.location.href = "logged-in.html"
 isLoggedIn();
}
  catch(err) {
    isLoggedIn();
    alert(err)
  }
});

