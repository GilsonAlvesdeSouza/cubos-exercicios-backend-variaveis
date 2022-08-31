import readlineSync from "readline-sync";

console.log("Calculo do volume de uma esfera\n");

let diametro = readlineSync.question("Informe o diametro da esfera: ");

let volumeEsfera = (4 / 3) * Math.pow(diametro / 2, 3);

console.log(
  `O volume de uma esfera de raio ${diametro / 2} é ${volumeEsfera} PI`
);
