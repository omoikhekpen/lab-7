document.addEventListener("DOMContentLoaded", () => {
    console.log("reg.js is loaded");

    let users = new Map(JSON.parse(localStorage.getItem("users")) || []);

    document.getElementById("regForm").addEventListener("submit", (e) => {
        e.preventDefault(); 

        const email = document.getElementById("email").value.trim();
        const user = document.getElementById("user").value.trim();
        const pass = document.getElementById("pass").value;
        const confPass = document.getElementById("confPass").value;

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,8}$/.test(email)) {
            document.getElementById("emailErr").innerText = "Invalid email!";
            return;
        } else document.getElementById("emailErr").innerText = "";

        if (!/^[A-Za-z][A-Za-z0-9_]{2,15}$/.test(user)) {
            document.getElementById("userErr").innerText = "Invalid username!";
            return;
        } else document.getElementById("userErr").innerText = "";

        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}/.test(pass)) {
            document.getElementById("passErr").innerText = "Weak password!";
            return;
        } else document.getElementById("passErr").innerText = "";

        if (pass !== confPass) {
            document.getElementById("confErr").innerText = "Passwords do not match!";
            return;
        } else document.getElementById("confErr").innerText = "";

        if (users.has(user)) {
            document.getElementById("userErr").innerText = "Username already taken!";
            return;
        }

        users.set(user, pass);
        localStorage.setItem("users", JSON.stringify([...users]));

        console.log("User registered:", user);
        alert("Registration successful! Redirecting to login...");

        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    });
});
