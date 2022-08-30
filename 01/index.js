import readlineSync from "readline-sync";

const peso = readlineSync.question("Informe seu peso :");
const altura = readlineSync.question("Informe sua altura :");

const IMC = peso / (altura ^ 2);

console.log(`O Resultado do seu imc é ${IMC.toFixed(2)}`);
