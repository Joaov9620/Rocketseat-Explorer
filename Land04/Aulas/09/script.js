/*
    Dado uma lista de pacientes, descubra o IMC de cada paciente e
    imprima

    "Paciente X possui o IMC de: Y"

    Onde X é o nome do paciente e Y é o IMC desse paciente

    Crie uma função para fazer o cálculo do IMC
*/

// peso / (alturar * alturar)

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

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}

function printPatientIMC(patient) {
    return `Pacientes ${patient.name} possui o IMC de
    ${IMC(patient.weight,patient.height)}`
}

for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient);
    alert(IMCmessage)
}


//Anonymous - função sem nome atribuida a uma constante
const myFunction = function() {}

/*
Arrow - função sem nome atribuida a uma constante 
e sem precisa colocar o nome function 
*/

const mySFunction = () => {};

//Jeito simples de executar função
const sum = (a, b) => a + b;