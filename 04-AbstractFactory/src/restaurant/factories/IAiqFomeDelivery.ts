import Beer from "../drink/Beer";
import IDrink from "../drink/interfaces/IDrink";
import Hamburguer from "../food/Hamburguer";
import IFoods from "../food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";


export default class IAiqFomeDelivery implements IDeliveryFactory{
    createDeliveryFood(): IFoods {
        return new Hamburguer();
    }
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
}
