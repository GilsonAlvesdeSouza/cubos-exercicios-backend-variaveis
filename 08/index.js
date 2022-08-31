import readlineSync from "readline-sync";

const PI = 3.1415;

let raio = readlineSync.question("Informe o valor do raio: ");

let comprimento = (2 * PI * raio).toFixed(1);
let areaCirculo = (PI * Math.pow(raio, 2)).toFixed(1);

console.log(
  `O Comprimento é ${comprimento} e a area da círculo é ${areaCirculo}`
);
