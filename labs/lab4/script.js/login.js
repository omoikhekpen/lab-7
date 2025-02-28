const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const loginUser = document.getElementById("loginUser").value.trim();
    const loginPass = document.getElementById("loginPass").value;

    if (!users.has(loginUser)) {
        document.getElementById("loginUserErr").innerText = "User not found!";
        return;
    } else document.getElementById("loginUserErr").innerText = "";

    if (users.get(loginUser) !== loginPass) {
        document.getElementById("loginPassErr").innerText = "Wrong password!";
        return;
    } else document.getElementById("loginPassErr").innerText = "";

    console.log("Logged in:", loginUser);
    alert("Login successful!");
});
