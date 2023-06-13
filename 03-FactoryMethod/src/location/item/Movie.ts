import Item from "./interface/item";

export default class Movie implements Item{
    start(): void {
        this.getDescription();
        console.log("Movie: sendo alugado");
    }
    getDescription(): void {
        console.log("Genero + sinopse + duração");
    }

}