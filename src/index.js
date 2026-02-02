import "./style.css";
import { validateEmail } from "./email.js";
import { validateCountry } from "./country.js";
// use to run prettier fromat  -> npx prettier . --write
//EMAIL ADDRESS
export let submitValid = false;

validateEmail();
validateCountry();
