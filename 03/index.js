let valorTenis = 129.99;
let valorSobraMes = 80;

console.log("Desconto do tênis");

let porcentoDesconto = (valorSobraMes * 100) / valorTenis;

console.log(
  `\nO desconto nescessário para comprar o tenis é ${porcentoDesconto.toFixed(
    2
  )}%`
);
