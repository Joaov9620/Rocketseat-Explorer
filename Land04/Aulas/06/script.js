/*
 ** Jogo de advinhação **
 
 Apresente a mensagem ao usuário:
 "Advinhe o número que estou pensando? Está ente 0 e 10"

 Crie uma lógica para gerar um número aleaório
 e verificar se o número digitado é o mesmo que o aleatório gerado
 pelo sitema.

 Enquanto o usuário	 não adivinha o número, mostra a mensagem:
 "Erro  tente novamente:"

 Caso o usuário acerte o número, apresentar a mensagem:
 "Parabéns! Você advinhou o número em x tentativas"

 Substitua o "x" da mensagem, pelo número de tentativas

*/

let result = prompt("Advinhe o número que estou pensando? Está ente 0 e 10");

const randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

while (match = Number(result) != randomNumber) {
    result = prompt("Erro, tente novamente");
    xAttempts++;
}

while (xAttempts == 1) {
    alert(`Parabéns! O número que pensei foi ${randomNumber} e 
 você advinhou o número em ${xAttempts}  uma tentativa`);
}

alert(`Parabéns! O número que pensei foi ${randomNumber} e 
você advinhou o número em ${xAttempts}  um tentativas`);