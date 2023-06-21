import IDrink from "../../drink/interfaces/IDrink";
import IFoods from "../../food/interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryFood(): IFoods;
    createDeliveryDrink() : IDrink;
}
