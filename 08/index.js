import readlineSync from "readline-sync";

console.log("Calculo do perímetro e área de um círculo\n");

const PI = 3.1415;

let raio = readlineSync.questionInt("Informe o valor do raio: ");

let comprimento = (2 * PI * raio).toFixed(1);
let areaCirculo = (PI * Math.pow(raio, 2)).toFixed(1);

console.log(
  `\nO Comprimento é ${comprimento} e a area da círculo é ${areaCirculo}`
);
