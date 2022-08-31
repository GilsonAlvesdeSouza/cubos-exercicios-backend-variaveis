import readlineSync from "readline-sync";

console.log("Soma dos ângulos internos de um polígono\n");
let ladosPoligono = readlineSync.question(
  "informe o numero de lados do polígono: "
);

if (ladosPoligono >= 3) {
  let somaAngulosInternos = (ladosPoligono - 2) * 180;
  let valorDeCadaAnguloInterno = somaAngulosInternos / ladosPoligono;
  console.log(
    `a soma dos ângulos internos ${somaAngulosInternos} e o valor de cada ângulo do polígono ${valorDeCadaAnguloInterno}`
  );
} else {
  console.log("A quantidade de lados não corresponde a um polígono");
}
