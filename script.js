const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const fieldMsg = document.querySelector(".fieldMsg");
const submitButton = document.querySelector("#submit");

confirmPassword.addEventListener("keyup", () => {
    if (confirmPassword.value !== password.value) {
        confirmPassword.classList.add("error");
        fieldMsg.textContent = "Passwords do not match.";
        submitButton.setAttribute("disabled", "");
    } else {
        confirmPassword.classList.remove("error");
        submitButton.removeAttribute("disabled");
        fieldMsg.textContent = "";
    }
})
