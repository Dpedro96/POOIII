import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
    constructor(){
        console.log("PlayStation: Configurando Console");
        this.configureGame();
    }
    configureGame() {
        this.authToken();
        console.log("PlayStation: Configurando ambiente");
    }
    authToken() {
        console.log("PlayStation: Autorizando Console");
    }

}