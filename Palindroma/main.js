"use strict"


let parola = prompt("Inserisci una parola:");

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}


if (reverseString(parola) === parola) {
  console.log("La parola è palindroma");
} else {
  console.log("La parola non è palindroma");
}