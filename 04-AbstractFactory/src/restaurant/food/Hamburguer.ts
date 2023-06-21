import IFoods from "./interfaces/IFood";


export default class Hamburguer implements IFoods{
    startRoute(): void {
        this.getDescription();
        console.log("Hambuguer: Saindo para entrega")
    }
    getDescription(): void {
        console.log("Hamburguer: Simples sem salada")
    }

}
