import readlineSync from "readline-sync";

console.log("Calculo do IMC\n");

const peso = readlineSync.questionInt("Informe seu peso :");
const altura = parseFloat(
  readlineSync.question("Informe sua altura :").replace(",", ".")
);
const IMC = peso / (altura ^ 2);

console.log(`\nO Resultado do seu imc é ${IMC.toFixed(2)}`);
