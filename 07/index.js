import readlineSync from "readline-sync";

let populacao = readlineSync.question(
  "Qual a poulação inicial de pessoas Infectadas? :"
);
let transmicao = readlineSync.question(
  "Qual quantidade de pessoas para as quais um paciente infectado pode transmitir? :"
);
let tempoPercorrido = readlineSync.question("Quantos dias percorrido? :");

let pessoasInfectadas = populacao * Math.pow(transmicao, tempoPercorrido / 7);

console.log(
  `Em ${tempoPercorrido} dias, o total de pessoas infectadas será de ${pessoasInfectadas} pessoas`
);
