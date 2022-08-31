import readlineSync from "readline-sync";
let x1 = readlineSync.question("Informe o valor de X1: ");
let x2 = readlineSync.question("Informe o valor de X2: ");
let y1 = readlineSync.question("Informe o valor de Y1: ");
let y2 = readlineSync.question("Informe o valor de Y2: ");

let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log(result);
