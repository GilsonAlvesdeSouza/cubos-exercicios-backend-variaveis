import readlineSync from "readline-sync";

console.log("Conversão de Fahrenheit");

let fahrenheit = readlineSync.question("Informe a temperatura em Fahrenheit: ");

let celsius = (fahrenheit - 32) * (5 / 9);

console.log(`${celsius.toFixed(2)} grau celsius`);
