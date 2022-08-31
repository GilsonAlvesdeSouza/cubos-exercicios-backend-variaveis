let valorTenis = 129.99;
let valorSobraMes = 80;

let porcentoDesconto = (valorSobraMes * 100) / valorTenis;

console.log(
  `O desconto nescessário para comprar o tenis é ${porcentoDesconto.toFixed(
    2
  )}%`
);
