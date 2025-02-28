let users = new Map();

const regForm = document.getElementById("regForm");

regForm.addEventListener("submit", (e) => {
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
        document.getElementById("confErr").innerText = "Passwords don't match!";
        return;
    } else document.getElementById("confErr").innerText = "";

    if (users.has(user)) {
        document.getElementById("userErr").innerText = "Username taken!";
        return;
    }

    users.set(user, pass);
    console.log("Registered:", user);
    alert("Registration successful!");

    window.location.href = "login.html";
});
