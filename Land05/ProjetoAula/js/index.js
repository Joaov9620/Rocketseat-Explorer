//default import
import Controls from "./controls.js";
import Timer from "./timer.js"; 
import Sound from "./sounds.js";
import Events from "./events.js";
//name import
import { 
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    minutesDisplay,
    secondsDisplay
} from "./elements.js";


// REFATORAR = Mudar  um código para deixá-lo mais entendivel
//deixar o código mais perfomático
//SEM ALTERAR suas funcionalidades



const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
});

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
});

const sound = Sound()

Events({controls, timer, sound})

