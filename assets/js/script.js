var fogotPassModal = document.getElementById("fogotPassModal");
var loginSucessModal = document.getElementById("loginSucessModal");
var forgotBtn = document.getElementById("forgotBtn");


forgotBtn.onclick = function() {
  fogotPassModal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == fogotPassModal) {
    fogotPassModal.style.display = "none";
  } else if (event.target == loginSucessModal) {
    loginSucessModal.style.display = "none";
  }
}

document.addEventListener("touchstart", (event) => {
  if (event.target === fogotPassModal) {
    fogotPassModal.style.display = "none";
  } else if (event.target === loginSucessModal) {
    loginSucessModal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const formMessages = document.querySelectorAll(".form-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let isValid = true;

        formMessages.forEach(msg => msg.textContent = "");

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "") {
            showError(usernameInput, "Please enter your username.");
            isValid = false;
        }

        if (password === "") {
            showError(passwordInput, "Please enter your password.");
            isValid = false;
        }

        if (isValid) {
            if (username === "huybva" && password === "lovengoc") {
                loginSucessModal.style.display = "block";
                form.reset();
            } else {
                showError(passwordInput, "Wrong username or password.");
                isValid = false;
            }
        }
    });
    function showError(input, message) {
        const parent = input.parentElement;
        const messageEl = parent.querySelector(".form-message");
        messageEl.textContent = message;
        messageEl.style.color = "red";
    }

    togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    togglePassword.innerHTML = type === "password"
      ? '<i class="fa-regular fa-eye"></i>'
      : '<i class="fa-regular fa-eye-slash"></i>';
    });
});