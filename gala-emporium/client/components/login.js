import adminPage from "../pages/adminPage.js";
export default async function init() {
  return `
  <div id = "form-div">  
    <form onsubmit = "login(); return false">
    <h4>Login Form 
    	<span>Please fill all the texts in the fields.</span>
    </h4>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <button value="login" id="loginButton" type="submit">Login</button>
    </form>
    </div>
    `;
}
async function login() {
  const credentials = {
    username: $("[name=username]").val(),
    password: $("[name=password]").val(),
  };
  let response = await fetch("http://localhost:3000/api/login", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  let result = await response.json();
  if (result.loggedIn) {
    $("#loginLink").html(await logoutButton());
    $("main").html(await adminPage());
    $('.userLinks').hide()
  }
}
window.login = login;

async function logout() {
  let response = await fetch("http://localhost:3000/api/login", {
    method: "delete",
  });
  let result = await response.json();
  console.log(result);
  if (!result.loggedIn) {
    $("main").html(await init());
    $("#loginLink").html(await loginButton());
    $('.userLinks').show();
  }
}
window.logout = logout;
async function logoutButton() {
  return ` <a onclick="logout()">Logout</a>`;
}
async function loginButton() {
  return ` <a href="#login">Login</a>`;
}

