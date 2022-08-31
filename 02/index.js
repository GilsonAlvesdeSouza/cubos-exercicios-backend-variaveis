import readlineSync from "readline-sync";

console.log("Conversão de Fahrenheit para graus em Celsius\n");

let fahrenheit = readlineSync.questionInt(
  "Informe a temperatura em Fahrenheit: "
);

let celsius = (fahrenheit - 32) * (5 / 9);

console.log(`\n${celsius.toFixed(2)} grau celsius`);
