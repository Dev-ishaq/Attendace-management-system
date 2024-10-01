function validateForm() {
    let isValid = true;

    // username
    const userName = document.getElementById("userName");
    const userNameError = document.getElementById("userNameError");
    if (userName.value.trim() === "") {
        userNameError.style.display = "block";
        userName.classList.add("failure");
        userName.classList.remove("success");
        isValid = false;
    } else {
        userNameError.style.display = "none";
        userName.classList.add("success");
        userName.classList.remove("failure");
    }

    // Password validation
    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password.value)) {
        passwordError.style.display = "block";
        password.classList.add("failure");
        password.classList.remove("success");
        isValid = false;
    } else {
        passwordError.style.display = "none";
        password.classList.add("success");
        password.classList.remove("failure");
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