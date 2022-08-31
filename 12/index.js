import readlineSync from "readline-sync";
console.log(
  "programa que calcula a taxa de juros que foi operada sobre um financiamento\n"
);

let montante = readlineSync.questionInt("Informe o Montante: ");
let capitalInicial = readlineSync.questionInt("Informe o capital inicial: ");
let meses = readlineSync.questionInt("informe a quantidade de meses: ");

let juros = (
  (Math.pow(montante / capitalInicial, 1 / meses) - 1) *
  100
).toFixed(3);

console.log(
  `\nO seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${juros}%, pois após 24 meses você teve que pagar ${montante} reais.`
);
