# form-validation-practice


<img width="842" height="842" alt="image" src="https://github.com/user-attachments/assets/090d6de2-24ee-4a8d-a09e-cbfc27546f64" />

**Form Validation Practice**

This is a simple web application demonstrating basic form validation using HTML, CSS, and JavaScript. The form includes the following fields:

 - Email Address

 - Country

 - Postal Code

 - Password

 - Confirm Password

Each field is validated with custom error messages, ensuring that users input valid data before submitting the form.

**Features**

 - Email Validation: Ensures the input follows a valid email format.

 - Country Field Validation: Ensures a country name is provided.

 - Postal Code Validation: Ensures a postal code (numeric) is provided.

 - Password Validation: Checks if the password meets the minimum length of 8 characters.

 - Confirm Password Validation: Ensures the password and confirm password match.

**Technologies Used**

 - HTML: Used to create the structure of the form.

 - CSS: Used for styling the form and creating responsive layouts.

 - JavaScript: Custom logic to handle form validation and error messaging.

 - Webpack: Used for bundling the JavaScript and CSS files.

<img width="809" height="963" alt="image" src="https://github.com/user-attachments/assets/aa7742c6-26a8-43a4-bcf7-771a53fce568" />

**Validation Logic**

 - Email Validation: Uses the type="email" attribute for basic browser validation, with custom error messages for missing or invalid input.

 - Country Validation: Checks if the country input is provided and displays an error message if it's empty.

 - Postal Code Validation: Uses type="number" for the postal code input and checks if it's a valid number.

 - Password Validation: Ensures the password is at least 8 characters long.

 - Confirm Password Validation: Ensures that the password and confirm password fields match.

<img width="792" height="845" alt="image" src="https://github.com/user-attachments/assets/eba23ffe-3d23-46e3-8df5-6595c39b3990" />

**Custom Error Messages**

Each validation rule provides user-friendly error messages that are displayed below the respective fields:

 - Email: "Please enter a valid email address."

 - Country: "Country field is required."

 - Postal Code: "Postal code is required."
 - Postal Code: "Postal code must be 5 numeric digits."

 - Password: "Password must be at least 8 characters."

 - Confirm Password: "Passwords must match."

<img width="846" height="974" alt="image" src="https://github.com/user-attachments/assets/fc31c081-2f14-4eb4-a7d0-8e21d9e85dcb" />



