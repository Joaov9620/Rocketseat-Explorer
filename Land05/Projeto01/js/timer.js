import sounds from './sounds.js';


export default function Timer({
    minutesDisplay,
    secondsDisplay,
    buttonDecreaseFive
}
){
    let timerTimeout;
    let minutes = Number(minutesDisplay.textContent);

    function updateDisplay(newMinutes,seconds){
        newMinutes = newMinutes === undefined? minutes : newMinutes;    
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2,"0"); 
        secondsDisplay.textContent = String(seconds).padStart(2,"0"); 
    }

    function reset(){
        updateDisplay(minutes,0);
        clearTimeout(timerTimeout);
    }

    function countdown(){
        timerTimeout = setTimeout(function(){
            let seconds = Number(secondsDisplay.textContent);
            let minutes = Number(minutesDisplay.textContent);
            let isFinished  = minutes <= 0 && seconds <= 0;

            updateDisplay(minutes,0);

            if(isFinished){
                updateDisplay()
                sounds().timeEnd()
                return 
            }

            if(seconds <= 0){
                seconds = 60
                --minutes
            }

            updateDisplay(minutes, String(seconds - 1))
            countdown();

        },1000);
    }
    
    function increaseTime(){
        minutes = minutes + 5;
        minutesDisplay.textContent = String(minutes).padStart(2,"0");   
    }

    function decreaseTime(){
        if(minutes < 5){

            //verificar essa parte( para quando não poder decrementar, alertar o usuario)
            //buttonDecreaseFive.style.backgroundColor = 'red';
            return
        }
        minutes = minutes - 5;
        minutesDisplay.textContent = String(minutes).padStart(2,"0");   
    }

    function updateMinutes(newMinutes){
        minutes = newMinutes
    }

    function hold(){
        clearTimeout(timerTimeout);
    }

    return{
        countdown,
        reset,
        updateDisplay,
        updateMinutes,
        hold,
        increaseTime,
        decreaseTime
    }
}