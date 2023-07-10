import IConsole from "./IGame";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(console: IConsole){
        super(console);
    }
    challenge(){
        console.log("Desafio Aceito");
    }
}