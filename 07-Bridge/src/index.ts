
import Play from "./game/Play";
import AdvancedPlay from "./game/AdvancedPlay";
import PlayStation from "./console/PlayStation";
import Xbox from "./console/Xbox";
import IConsole from "./console/IConsole";

function startPlay(consoles: IConsole){
    console.log("Aguardando");
    const play = new Play(consoles)
    play.playing();
    play.result();
}

function advancedPlay(consoles: IConsole){
    console.log("Aguardando");
    const play = new AdvancedPlay(consoles);
    play.playing();
    play.result();
    play.challenge();
}

startPlay(new PlayStation);
startPlay(new Xbox);
advancedPlay(new PlayStation);
advancedPlay(new Xbox);