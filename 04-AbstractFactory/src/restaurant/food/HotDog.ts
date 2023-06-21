import IFoods from "./interfaces/IFood";


export default class HotDog implements IFoods{
    startRoute(): void {
        this.getDescription();
        console.log("HotDog: Saindo para entrega")
    }
    getDescription(): void {
        console.log("HotDog: Duplo")
    }

}
