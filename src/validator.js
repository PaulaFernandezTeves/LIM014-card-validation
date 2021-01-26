// Dentro de isValid va a ir el algoritmo de Luhn
const isValid = (numberCard) => {
    let  numeroArray = numberCard.split("").reverse(); //Separe un número de 2 digitos y sume cada digito
console.log(numeroArray);
    let i;
  for (i = 0; i < numeroArray.length; i++) {   //Tome en cuenta los que son pares desde el cero, 2, ... (las posiciones)

    if ((i+1) % 2 == 0) {
        let multiplicarNumero = numeroArray[i]*2;  //Si eso pasa dejalo multiplicar *2 y


        numeroArray[i] = multiplicarNumero.toString();   // lo convierto en string.

        if (multiplicarNumero > 9) {  // Si es mayor a 9, se va separar los digitos
            let nuevoNumero = numeroArray[i].split(""); // con el split

            let suma = parseInt(nuevoNumero[0]) + parseInt(nuevoNumero[1]); //Sumar digito x digito desde la posicion 0 a posicion 1
            numeroArray[i] = suma.toString(); // ver el resultado de esa suma
        }
    }
  }


  let total = 0;
  let index = 0;

  for (index; index < numeroArray.length; index++) {  // El index empieza desde cero
    total = total + parseInt(numeroArray[index]);  //Está recorriendo un array
  }


  console.log(total)

  if (total % 10 == 0) {
      return true
  }else{
      return false
  }
}


// Ahora maskify: debe mostrarme los # y los últimos 4 dígitos

const maskify = (numberCard) => {
    //Ocultar los digitos menos los ultimos 4

    if (numberCard.length > 4) {
        let reversed = reverse(numberCard);
        let nuevoNumeroString = "";

        for (let i = 0; i < reversed.length; i++) {  //Se le va a sumar un 1 al i ==> ++ significa aumentarle 1 más
            if (i < 4){
                nuevoNumeroString += reversed[i];
            }else {
                nuevoNumeroString += "#"  // Si no cumple con la condicional entonces que oculte con #
            }
        }


        return reverse(nuevoNumeroString);
    } else{
        return numberCard;
    }

}

function reverse(str) {
    return str.split("").reverse().join("");
}

const validator = { isValid, maskify }

export default validator
