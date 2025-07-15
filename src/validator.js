const ValidatorModule = (function () {
    const emailInput = document.getElementById("email");
    const emailError = document.querySelector(".error-email");

    emailInput.addEventListener("blur", () => {
        if (emailInput.validity.valueMissing) {
            emailError.textContent = "You need to introduce an email";
            emailError.classList.add("error");
        } else if (emailInput.validity.typeMismatch) {
            emailError.textContent = "This isn't a valid email";
            emailError.classList.add("error");
        } else if (emailInput.validity.tooShort) {
            emailError.textContent = "This email is too short";
            emailError.classList.add("error");
        } else {
            emailError.textContent = "";
            emailError.className = "error-email";
        }
    });

    const countryInput = document.getElementById("country");
    const countryError = document.querySelector(".error-country");
    countryInput.addEventListener("blur", () => {
        if (countryInput.validity.valueMissing) {
            countryError.textContent =
                "You need to introduce the country you're from";
            countryError.classList.add("error");
        } else if (countryInput.validity.tooShort) {
            countryError.textContent =
                "There doesn't exist a country with a name that short";
            countryError.classList.add("error");
        } else {
            countryError.textContent = "";
            countryError.className = "error-country";
        }
    });

    const zipCodeInput = document.getElementById("zip-code");
    const zipCodeError = document.querySelector(".error-zip-code");
    zipCodeInput.addEventListener("blur", () => {
        if (zipCodeInput.validity.valueMissing) {
            zipCodeError.textContent = "Zip code can't be empty";
            zipCodeError.classList.add("error");
        } else if (zipCodeInput.validity.patternMismatch) {
            zipCodeError.textContent =
                "Zip code must contain only numbers, without spaces or dashes";
            zipCodeError.classList.add("error");
        } else if (zipCodeInput.validity.tooShort) {
            zipCodeError.textContent = "Zip code must be 5 digits";
            zipCodeError.classList.add("error");
        } else if (zipCodeInput.validity.tooLong) {
            zipCodeError.textContent = "Zip code must be 5 digits";
            zipCodeError.classList.add("error");
        } else {
            zipCodeError.textContent = "";
            zipCodeError.className = "error-zip-code";
        }
    });

    const passwordInput = document.getElementById("password");
    const passwordError = document.querySelector(".error-password");
    let validPassword = false;
    let password = "";
    passwordInput.addEventListener("blur", () => {
        password = passwordInput.value;
        validPassword = false;
        if (passwordInput.validity.valueMissing) {
            passwordError.textContent = "You must type a password";
            passwordError.classList.add("error");
        } else if (passwordInput.validity.tooShort) {
            passwordError.textContent =
                "Password must be at least 5 characters long";
            passwordError.classList.add("error");
        } else if (passwordInput.validity.tooLong) {
            passwordError.textContent = "Password can't be that long";
            passwordError.classList.add("error");
        } else {
            passwordError.textContent = "";
            passwordError.className = "error-password";
            validPassword = true;
        }
    });

    const confirmPasswordInput = document.getElementById(
        "password-confirmation",
    );
    const errorConfirmPassword = document.querySelector(
        ".error-password-confirmation",
    );
    let confirmedPassword = false;
    confirmPasswordInput.addEventListener("blur", () => {
        confirmedPassword = false;
        if (confirmPasswordInput.validity.valueMissing) {
            errorConfirmPassword.textContent =
                "You need to confirm your password";
            errorConfirmPassword.classList.add("error");
        } else if (passwordInput.validity.valueMissing) {
            errorConfirmPassword.textContent =
                "You need to input a password before confirming it";
            errorConfirmPassword.classList.add("error");
        } else if (confirmPasswordInput.value != password) {
            errorConfirmPassword.textContent = "Passwords do not match";
            errorConfirmPassword.classList.add("error");
        } else if (!validPassword) {
            errorConfirmPassword.textContent =
                "Passwords match, but password isn't valid";
            errorConfirmPassword.classList.add("error");
        } else {
            errorConfirmPassword.textContent = "";
            errorConfirmPassword.className = "error-password-confirmation";
            confirmedPassword = true;
        }
    });

    const form = document.getElementById("fake-form");
    form.addEventListener("submit", (e) => {
        if (!(emailInput.validity.valid && countryInput.validity.valid && zipCodeInput.validity.valid && passwordInput.validity.valid && confirmedPassword === true)) {
            e.preventDefault();
        } else {
            alert("High Five!");
        }
    });
})();

export default ValidatorModule;
