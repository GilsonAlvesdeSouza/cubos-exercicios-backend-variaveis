import readlineSync from "readline-sync";

let capital = readlineSync.questionFloat("Informe o valor do capital: ");
let taxaFixa = parseFloat(
  readlineSync
    .question("Informe o valor da taxa fixa de juros: ")
    .replace(",", ".")
);
let periodo = readlineSync.questionInt("Informe o período de tempo: ");

let montante = capital * Math.pow(1 + taxaFixa / 100, periodo);

console.log(`Total do montante é ${montante.toFixed(2)}`);
