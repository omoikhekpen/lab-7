document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ login.js loaded!");

    let users = new Map(JSON.parse(localStorage.getItem("users"))) || new Map();

    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const { value: loginUser } = document.getElementById("loginUser");
        const { value: loginPass } = document.getElementById("loginPass");

        if (!users.has(loginUser)) {
            document.getElementById("loginUserErr").innerText = "User not found!";
            return;
        }

        if (users.get(loginUser) !== loginPass) {
            document.getElementById("loginPassErr").innerText = "Wrong password!";
            return;
        }

        alert("Login successful!");
    });
});
