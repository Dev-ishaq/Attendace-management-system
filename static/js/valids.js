function validateForm() {
    let isValid = true;

     // Email validation
     const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.style.display = "block";
        email.classList.add("failure");
        email.classList.remove("success");
        isValid = false;
    } else {
        emailError.style.display = "none";
        email.classList.add("success");
        email.classList.remove("failure");
    }

    return isValid;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    // Additional event listeners to validate on input change
    const inputs = document.querySelectorAll("#registrationForm input");
    inputs.forEach(input => {
        input.addEventListener("input", validateForm);
    });
});