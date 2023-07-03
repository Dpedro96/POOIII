import Transportadora from "../Transportadora/Transportadora";
import ICorreios from "../correios/ICorreios";

export default class TransportadoraAdapter implements ICorreios{
    constructor(private transportadora: Transportadora){
        console.log("Adapteando para Transportadora")
    }
    sendCorreios() {
        return this.transportadora.send();
    }
    reciveCorreios() {
        return this.transportadora.receive();
    }

}