/*
    Solicite dois números, faça a soma deles, divida por 2 e apresente
    o resultado final ao usuário
*/

alert("Iremos somar dois números e dividir por 2");
let numberOne = prompt("Digite o primeiro número:");
let numberTwo = prompt("Digite o segundo número:");
let result = (Number(numberOne) + Number(numberTwo) / 2);
alert("Resultado final: " + result);