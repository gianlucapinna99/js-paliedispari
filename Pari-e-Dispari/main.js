let scelta = prompt("Scegli tra pari e dispari");
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
let numeroComputer = Math.floor(Math.random() * 5) + 1;
let somma = numeroUtente + numeroComputer;


function sommaNumeri(num1, num2) {
  let somma = num1 + num2;
  let pari = somma % 2 === 0;
  return {somma: somma, isPari: isPari};
}


console.log("Il tuo numero: " + numeroUtente);
console.log("Il numero del computer: " + numeroComputer);
console.log("Hai scelto " + scelta)
console.log("La somma è: " + somma)


let risultato = sommaNumeri (numeroUtente, numeroComputer);

if ((scelta === "pari" && risultato.pari) || (scelta === "dispari" && !risultato.pari)) {
  console.log("Hai vinto!");
} else {
  console.log("Hai perso!");
}


