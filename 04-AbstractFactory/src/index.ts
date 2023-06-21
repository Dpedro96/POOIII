import Client from "./restaurant/client/Client";
import Company from "./restaurant/consts/Company";
import IAiqFomeDelivery from "./restaurant/factories/IAiqFomeDelivery";
import IFoodDelivery from "./restaurant/factories/IFoodDelivery";
import IDeliveryFactory from "./restaurant/factories/interfaces/IDeliveryFactory";


const currentCompany = Company.AIQFOME;
let factory! : IDeliveryFactory;
switch(currentCompany){
    case Company.IFOOD : 
        factory = new IFoodDelivery();
        break;
    case Company.AIQFOME : 
        factory = new IAiqFomeDelivery();
        break;
    default : 
        console.error("Companhia não definida!");
}
const client = new Client(factory);
client.startRoute();
