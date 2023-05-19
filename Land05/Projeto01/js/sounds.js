export default function (){
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const forest = new Audio('../sounds/Floresta.wav');
    const rain = new Audio('../sounds/Chuva.wav');
    const coffeeShop = new Audio('../sounds/Cafeteria.wav');
    const fireplace = new Audio('../sounds/Lareira.wav'); 

    forest.loop = true;
    rain.loop = true;
    coffeeShop.loop = true;
    fireplace.loop = true;

    forest.volume = 0.5;

    function volume(volume){
        forest.volume = volume/100;
    }

    function playSound(card){
        stop()
        if(card == "card01"){
            forest.play();
        }else if(card == "card02"){
            rain.play();
        }else if(card == "card03"){
            coffeeShop.play();
        }else if(card == "card04"){
            fireplace.play();
        }
    }

    function stop(){
        buttonPressAudio.pause()
        kitchenTimer.pause()
        forest.pause()
        rain.pause()
        coffeeShop.pause()
        fireplace.pause();
    }
   
    function pressButton(){
        buttonPressAudio.play();
    }

    function timeEnd(){
        kitchenTimer.play()
    }


    return{
        pressButton,
        timeEnd,
        stop,
        playSound,
        volume
    }
}
