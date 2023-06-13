import Item from "./interface/item";

export default class Game implements Item{
    start(): void {
        this.getDescription();
        console.log("Game: sendo alugado");
    }
    getDescription(): void {
        console.log("genero + sinopse")
    }

}