import readlineSync from "readline-sync";

console.log("Calculadora juros compostos\n");

let capital = readlineSync.questionFloat("Informe o valor do capital: ");
let taxaFixa = parseFloat(
  readlineSync
    .question("Informe o valor da taxa fixa de juros: ")
    .replace(",", ".")
);
let periodo = readlineSync.questionInt("Informe o período de tempo: ");

let montante = capital * Math.pow(1 + taxaFixa / 100, periodo);

console.log(`\nTotal do montante é ${montante.toFixed(2)}`);
