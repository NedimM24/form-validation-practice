export function validatePasswords() {
  const form = document.querySelector("form");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const passwordError = document.querySelector(".password-error");
  const confirmError = document.querySelector(".confirm-password-error");

  function showErrorPassword() {
    if (password.validity.valueMissing) {
      passwordError.textContent = "You need to enter a password";
    } else if (password.validity.tooShort) {
      passwordError.textContent = "Password must be atleast 8 characters long";
    }
    passwordError.className = "password-error-active";
  }

  function showConfirmErrorPassword() {
    if (confirmPassword.value !== password.value) {
      confirmError.textContent = "Passwordss must match";
      confirmError.className = "confirm-Password-error-active";
    } else {
      confirmError.textContent = "";
      confirmError.className = "confirm-password-error";
    }
  }

  password.addEventListener("input", () => {
    if (password.validity.valid) {
      passwordError.textContent = "";
      passwordError.className = "password-error";
    } else {
      showErrorPassword();
    }
  });

  confirmPassword.addEventListener("input", () => {
    showConfirmErrorPassword();
  });

  form.addEventListener("submit", (event) => {
    if (!password.validity.valid || confirmPassword.value !== password.value) {
      showErrorPassword();
      showConfirmErrorPassword();
      event.preventDefault();
    }
  });
}
