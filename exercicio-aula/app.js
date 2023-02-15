/* CALCULAR A GORJETA DE UMA COMPRA
RECEBER O VALOR TOTAL DA COMPRA JUNTO COM A GORJETA */

console.log('-----------------------------------------------------------');

function compra(valorCompra, gorjeta) {
    return (valorCompra + gorjeta) * gorjeta
}

console.log(compra(100, 10));

// let x = 5;
// let y = 6;

// function retornaMaior(x, y) {
//     if (x > y) {
//         return "x é maior";
//     } else {
//         return "y é maior";
//     }
// }

// console.log(retornaMaior());