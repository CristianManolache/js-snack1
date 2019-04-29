var numero1 = prompt("Inserisci un numero");
var numero2 = prompt("Inserisci un numero");

if (numero1 == numero2) {
  console.log('numeri uguali');
} else {
  console.log(Math.max(numero1,numero2));
}
