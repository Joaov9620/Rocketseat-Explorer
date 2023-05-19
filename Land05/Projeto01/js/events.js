import {
    buttonPlay,
    buttonStop,
    buttonAddFive,
    buttonDecreaseFive,
    card01,
    card02,
    card03,
    card04
} from './elements.js'
 
export default function events({timer,sound}){
    
    function setColor(card){
        card01.classList.remove('cardColor');
        card02.classList.remove('cardColor');
        card03.classList.remove('cardColor');
        card04.classList.remove('cardColor');
        card.classList.add('cardColor');
    }

    function cardVerification(card){
       
        sound.playSound(card.classList[0]);

        if(card.classList.contains('cardColor')){
            sound.stop();
            card.classList.remove('cardColor'); 
        }else{
            setColor(card);
        }
    }

    buttonPlay.addEventListener('click', function(){
      timer.countdown() 
      sound.pressButton()
    })

    buttonStop.addEventListener('click', function(){
        timer.reset() 
        sound.pressButton()
    });

    buttonAddFive.addEventListener('click', function(){
        timer.increaseTime()
        sound.pressButton()
    });

    buttonDecreaseFive.addEventListener('click', function(){
        timer.decreaseTime()
        sound.pressButton()
    });

    card01.addEventListener('click', function(){
        cardVerification(card01);
    });

    card02.addEventListener('click', function(){     
        cardVerification(card02);
    });

   card03.addEventListener('click', function(){
        cardVerification(card03);
    });

    card04.addEventListener('click', function(){
        cardVerification(card04);
    });
}