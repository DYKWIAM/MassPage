import login from "../components/login.js"

export default async function loginPage(){
    return `
    <form onsubmit = "login()" return false>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <button value="login" id="loginButton" type="submit">Login</button>
    </form>
    
    `;

} 