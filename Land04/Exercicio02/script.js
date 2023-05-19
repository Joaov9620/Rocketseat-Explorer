let students = [{
    name: 'John',
    firstNote: 9,
    secondNote: 10,
}, {
    name: 'Gustavo',
    firstNote: 4,
    secondNote: 3,
}, {
    name: 'Julia',
    firstNote: 9,
    secondNote: 0,
}, {
    name: 'Rafa',
    firstNote: 3,
    secondNote: 2,
}];

let average;

const averageNote = (firstNote, secondNote) => average = (firstNote + secondNote) / 2;

/*function averageNote(firstNote, secondNote) {
    return average = (firstNote + secondNote) / 2;
}*/

function printStudentAverage(students) {
    return `A média do(a) aluno(a) ${students.name} é: ${averageNote(students.firstNote, students.secondNote)}`
};

for (let student of students) {
    let message = printStudentAverage(student)

    if (average >= 7) {
        alert(` ${message} 
        Parabéns ${student.name}! Você foi aprovado(a) no concurso!`)

    } else {
        alert(` ${message} 
         Não foi dessa vez, ${student.name}! Tente novamente!`)
    }
};