//import { isValid, maskify } from './validator.js';
import validator from './validator.js';


//validate

document.getElementById("validateButton").addEventListener("click", () => {

    let creditCardNumber = document.getElementById("tarjeta").value;
    let correcto = document.getElementById("answer");

    if (validator.isValid(creditCardNumber) == true) {

    correcto.innerHTML = validator.maskify(creditCardNumber) + " Tarjeta válida"
    correcto.style = "color:yellow";

    } else {
        correcto.innerHTML = validator.maskify(creditCardNumber) + " Tarjeta NO válida"
        correcto.style = "color:red";
    }
});

