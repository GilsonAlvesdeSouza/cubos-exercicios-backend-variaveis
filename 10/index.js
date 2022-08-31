console.log(
  "Calculo do valor de DELTA de uma equação do segundo grau 5x^2 + 5x + 1 = 0 \n"
);

let equacao = "5x^2 + 5x + 1 = 0";
let a = equacao.substring(0, 1);
let b = equacao.substring(7, 8);
let c = equacao.substring(12, 13);

let delta = Math.pow(b, 2) - 4 * a * c;

console.log(`O valor de delta é ${delta}`);
