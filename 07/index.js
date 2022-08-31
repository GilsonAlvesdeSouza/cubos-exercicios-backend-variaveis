import readlineSync from "readline-sync";

console.log("Casos de COVID-19\n");

let populacao = readlineSync.questionInt(
  "Qual a poulação inicial de pessoas Infectadas? :"
);

let transmicao = readlineSync.questionInt(
  "Qual quantidade de pessoas para as quais um paciente infectado pode transmitir? :"
);

let tempoPercorrido = readlineSync.questionInt("Quantos dias percorrido? :");

let pessoasInfectadas = populacao * Math.pow(transmicao, tempoPercorrido / 7);

console.log(
  `\nEm ${tempoPercorrido} dias, o total de pessoas infectadas será de ${pessoasInfectadas} pessoas`
);
