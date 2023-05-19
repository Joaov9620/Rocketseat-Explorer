/*
    Crie uma lista de pacientes

    Cada paciente dentro da lista deverá conter
        nome
        idade
        peso
        altura

    Escreva uma lista contendo o nome dos pacientes, suas idades, altura e pesos
*/

const patients = [{
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 190,
    },
    {
        name: "Alexandre",
        age: 20,
        weight: 70,
        height: 170,
    },
    {
        name: "Carlos",
        age: 42,
        weight: 90,
        height: 180,
    },
];

const patientNames = [];

//para uma paciente de pacientes faça alguma coisa
/* 
resumo do for:
    ele vai em pacientes pega um paciente e salva na váriavel
    patient , que dentro dessa variável vai conter as informações
    do paciente na qual dentro do código ele vai salvar o nome
    do paciente dentro do array patientNames[]. E depois disso prosseguirar
    para o próximo paciente e quando não ter mais pacientes, encerrarar o for.
*/
for (let patient of patients) {
    patientNames.push(patient.name);
}

alert(patientNames)