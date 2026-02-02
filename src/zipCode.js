export function validatePostalCode() {
  const form = document.querySelector("form");
  const zipCode = document.getElementById("zip");
  const zipError = document.querySelector(".postal-error");

  // Function to display error messages
  function showError() {
    if (zipError) {
      // Check if the error span exists
      if (zipCode.value === "") {
        zipError.textContent = "You need to enter a Postal Code";
      } else if (zipCode.value.length !== 5 || isNaN(zipCode.value)) {
        zipError.textContent = "Postal Code must be 5 numeric digits";
      }
      zipError.className = "zip-error-active"; // Add class to style the error message
    }
  }

  zipCode.addEventListener("input", () => {
    if (zipError && zipCode.value.length === 5 && !isNaN(zipCode.value)) {
      zipError.textContent = "";
      zipError.className = "postal-error";
    } else {
      showError();
    }
  });

  // Form submit validation
  form.addEventListener("submit", (event) => {
    if (zipCode.value.length !== 5 || isNaN(zipCode.value)) {
      showError();
      event.preventDefault();
    }
  });
}
