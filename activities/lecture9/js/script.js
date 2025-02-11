document.addEventListener("DOMContentLoaded", function() {
    // Select input fields
    const inputFields = document.querySelectorAll("#firstName, #lastName, #email");

    // Function to change background on focus
    function handleFocus(event) {
        event.target.style.backgroundColor = "#e0f7fa"; // Light blue background on focus
    }

    // Function to reset background on blur
    function handleBlur(event) {
        event.target.style.backgroundColor = ""; // Reset to default
    }

    // Loop through each input field and add event listeners
    inputFields.forEach(input => {
        input.addEventListener("focus", handleFocus);
        input.addEventListener("blur", handleBlur);
    });
});
