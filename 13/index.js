import readlineSync from "readline-sync";

console.log("Calculo da área total de um cilindro\n");

let raio = readlineSync.questionInt("Informe o raio: ");
let altura = readlineSync.questionInt("Informe a altura: ");

let areaTotal = 2 * raio * (raio + altura);

console.log(`\nA área total do cilindro é ${areaTotal}pi`);
