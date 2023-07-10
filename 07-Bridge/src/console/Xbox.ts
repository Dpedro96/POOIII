import IConsole from "./IConsole";

export default class Xbox implements IConsole{
    constructor(){
        console.log("Xbox: Configurando Console");
        this.configureGame();
    }
    configureGame() {
        this.authToken();
        console.log("Xbox: Configurando ambiente");
    }
    authToken() {
        console.log("Xbox: Autorizando Console");
    }
}