import ICorreios from "./ICorreios";

export default class Correios implements ICorreios{
    sendCorreios() {
        console.log("Envio feito pelos Correios");
    }
    reciveCorreios() {
        console.log("Recebido pelos Correios")
    }

}