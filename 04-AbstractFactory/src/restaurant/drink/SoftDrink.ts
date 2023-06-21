import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    startRoute(): void {
        this.getDescription();
        console.log("SoftDrink: Saindo para entrega");
    }
    getDescription(): void {
        console.log("SoftDrink: Soda");
    }

}
