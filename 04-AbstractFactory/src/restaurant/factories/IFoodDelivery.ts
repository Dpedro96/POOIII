import Beer from "../drink/Beer";
import SoftDrink from "../drink/SoftDrink";
import IDrink from "../drink/interfaces/IDrink";
import HotDog from "../food/HotDog";
import IFoods from "../food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";


export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryFood(): IFoods {
        return new HotDog();
    }
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
}