/*
    Faça um programa que tenha um menu e apresente a seguinte mensagem:

    Olá usuário! Digite o número da opçao desejada

        1. Cadastrar um item na lista
        2. Mostrar intens cadastrados
        3. Sair do programa

    ---

    O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes
    cenários:

    Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
    Caso o usuário digite 2, ele poderá ver os itens cadastrados
        Se não houver nehum item cadastrado, mostrar a mensagem:
            "Não existe itens cadastrados"
    Caso o usuário digite 3, a aplicação deverá ser encerrada

*/

/*
    Dados de entrada do usuário:
    1. número desejado
    2. item da lista

    Variaveis
    1. opção digitada
    2. Lista de itens
*/

let option;
let items = [];



while (option != 3) {
    option = Number(prompt(`
    Olá usuário! Digite o número da opçao desejada

    1. Cadastrar um item na lista
    2. Mostrar intens cadastrados
    3. Sair do programa
    `));

    switch (option) {
        case 1:
            let item = prompt('Digite o nome do item:')
                //o .push() =  vai adicionando os item ao array 
            items.push(item)

            break;

        case 2:
            if (items.length == 0) {
                alert('Não existe intens cadastrados')
            } else {
                alert(items)
            }
            break;

        case 3:
            alert('Tchau!')
            break;

        default:
            alert('Opção inválida, tente novamente')
    }
}