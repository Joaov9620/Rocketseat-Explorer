const screen1 = document.querySelector(".screen1"); 
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//Events
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', function(e){
    if(e.key == 'Enter' && (screen1.classList.contains('hide')) ) {
        handleResetClick();
    }
})

//função callback  =  função que é passada como argumento para outra função
function handleTryClick(event) {

    event.preventDefault();  /* não faça o padrão desse evento
    //ou seja o padrão de de um botão no formulário é enviar o formulário
    //e nessa linha ele fala para não fazer isso*/
    
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value == randomNumber)){
       
        toggleScreen();

        screen2.querySelector("h2")
        .innerText = ` Você acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = "";
    xAttempts++;
};

function handleResetClick(){
    toggleScreen();
    xAttempts = 1;
};

//toggle =  se tiver ele tirar , se não tiver ele colocar (remover - add)
function toggleScreen(){
    screen1.classList.toggle("hide") 
    screen2.classList.toggle("hide")
}


