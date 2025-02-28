document.addEventListener("DOMContentLoaded", () => {
    console.log("login.js is loaded");

    let users = new Map(JSON.parse(localStorage.getItem("users")) || []);

    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault(); 

        const loginUser = document.getElementById("loginUser").value.trim();
        const loginPass = document.getElementById("loginPass").value;

        if (!users.has(loginUser)) {
            document.getElementById("loginUserErr").innerText = "User not found!";
            return;
        }

        if (users.get(loginUser) !== loginPass) {
            document.getElementById("loginPassErr").innerText = "Wrong password!";
            return;
        }

        console.log("User logged in:", loginUser);
        alert("Login successful!");
    });
});
