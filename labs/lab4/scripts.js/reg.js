document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ reg.js loaded!");

    let users = new Map(JSON.parse(localStorage.getItem("users"))) || new Map();

    document.getElementById("regForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const { value: email } = document.getElementById("email");
        const { value: user } = document.getElementById("user");
        const { value: pass } = document.getElementById("pass");
        const { value: confPass } = document.getElementById("confPass");

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,8}$/.test(email)) {
            document.getElementById("emailErr").innerText = "Invalid email!";
            return;
        }

        if (!/^[A-Za-z][A-Za-z0-9_]{2,15}$/.test(user)) {
            document.getElementById("userErr").innerText = "Invalid username!";
            return;
        }

        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}/.test(pass)) {
            document.getElementById("passErr").innerText = "Weak password!";
            return;
        }

        if (pass !== confPass) {
            document.getElementById("confErr").innerText = "Passwords don't match!";
            return;
        }

        if (users.has(user)) {
            document.getElementById("userErr").innerText = "Username taken!";
            return;
        }

        users.set(user, pass);
        localStorage.setItem("users", JSON.stringify([...users]));

        alert("Registration successful!");
        window.location.href = "login.html";
    });
});
