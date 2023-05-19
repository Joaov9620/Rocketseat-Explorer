let firstNumber = prompt('Digite o primeiro número:');
let secondNumber = prompt('Digite o segundo número:');

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber;

if (firstNumber == secondNumber) {
    alert('Os dois números são iguais')
} else {
    alert('Os dois números são diferêntes')
}

if (sum % 2 == 0) {
    alert('A soma dos dois números é Par')
} else {
    alert('A soma dos dois números é Ímpar')
}

alert('Soma: ' + sum);
alert('Subtração: ' + sub);
alert('Multiplicação: ' + multi);
alert('Divisão: ' + div);
alert('Resto da divisão: ' + restDiv);