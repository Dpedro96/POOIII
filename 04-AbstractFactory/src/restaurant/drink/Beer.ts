import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    startRoute(): void {
        this.getDescription();
        console.log("Beer: Saindo para entrega");
    }
    getDescription(): void {
        console.log("Beer: Soda");
    }

}

