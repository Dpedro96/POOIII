import IConsole from "../console/IConsole";
import IGame from "./IGame";

export default class Play implements IGame{
    constructor(private console: IConsole){}
    playing(): void {
        console.log("Iniciando o Game");
    }
    result(): void {
        console.log("Playing");
    }

}