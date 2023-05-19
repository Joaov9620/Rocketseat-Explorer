import {
    buttonPlay,
    buttonStop,
    buttonAddFive,
    buttonDecreaseFive,
    card01,
    card02,
    card03,
    card04,
    minutesDisplay,
    secondsDisplay,
    volume
} from './elements.js';

import Events from './events.js';
import Timer from './timer.js';
import Sound from './sounds.js';
import Controls from './controls.js';

// verificar quando adicionado os 5 minutos fazer com que, quando atingir 60 minutes
// mostre em horas tambem

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    buttonDecreaseFive
});

const controls = Controls({
    buttonPlay,
    buttonStop,
    buttonAddFive,
    buttonDecreaseFive,
    card01,
    card02,
    card03,
    card04,
    minutesDisplay,
    secondsDisplay
})

const sound = Sound();

Events({timer, sound});

//oinput  =  pegando o valor alterado
volume.oninput = () =>{
    sound.volume(volume.value)
} 