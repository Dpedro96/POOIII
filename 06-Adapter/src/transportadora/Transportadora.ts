import ITransportadora from "./ITransportadora";

export default class Transportadora implements ITransportadora{
    receive() {
        console.log("Recebido pela Transportadora");
    }
    send() {
        console.log("Envio feito pela Transportadora");
    }

}