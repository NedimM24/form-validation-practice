export function validateCountry() {
  const form = document.querySelector("form");
  const country = document.getElementById("country");
  const countryError = document.querySelector(".country-error");

  function showError() {
    if (country.validity.valueMissing) {
      countryError.textContent = "You need to enter a country";
    }
    countryError.className = "country-error-active";
  }

  country.addEventListener("input", () => {
    if (country.validity.valid) {
      countryError.textContent = "";
      countryError.className = "country-error";
    } else {
      showError();
    }
  });

  form.addEventListener("submit", (event) => {
    if (!country.validity.valid) {
      showError();
      event.preventDefault();
    }
  });
}
