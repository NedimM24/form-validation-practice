//One function that will create selectors for email, handle event listeners and display error

export function validateEmail() {
  const form = document.querySelector("form");
  const email = document.getElementById("email");
  const emailError = document.querySelector("#email + span.email-error");

  function showError() {
    if (email.validity.valueMissing) {
      //empty input
      emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
      //not a valid email
      emailError.textContent = "Entered value must be an email address.";
    } else if (email.validity.tooShort) {
      emailError.textContent = `Email needs to be atleast ${email.minLength}
                                    characters long.`;
    }
    emailError.className = "email-error-active";
  }

  //Event listenter that removes message content if correct input format is followed
  email.addEventListener("input", (event) => {
    if (email.validity.valid) {
      emailError.textContent = "";
      emailError.className = "email-error";
    } else {
      showError();
    }
  });
  
  //If the email is invalid once the submit button is clicked, showError()
  form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
      showError();
      event.preventDefault();
    }
  });
}
