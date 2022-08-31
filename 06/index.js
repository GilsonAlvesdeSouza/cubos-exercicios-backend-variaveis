import readlineSync from "readline-sync";

console.log("calculo da velocidade média\n");
let distanciaPercorrida = readlineSync.question(
  "Informe a distancia percorrida em metros: "
);
let tempo = readlineSync.question("Informe o tempo em segundos: ");

let metrosPorSegundos = distanciaPercorrida / tempo;

let kmPorHora = metrosPorSegundos * 3.6;
console.log(`\nVelocidade média é ${kmPorHora}km/h`);
