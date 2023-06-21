import IDrink from "../drink/interfaces/IDrink";
import IDeliveryFactory from "../factories/interfaces/IDeliveryFactory";
import IFoods from "../food/interfaces/IFood";

export default class Client{
    private food : IFoods;
    private drink : IDrink;

    constructor(factory: IDeliveryFactory){

        this.food = factory.createDeliveryFood();
        this.drink = factory.createDeliveryDrink();
   
    }

    startRoute() : void{
        this.food.startRoute();
        this.drink.startRoute();
    }
}