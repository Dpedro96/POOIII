import ICorreios from "./correios/ICorreios"
import Correios from "./correios/Correios"
import TransportadoraAdapter from "./adapter/TransportadoraAdapter";
import Transportadora from "./Transportadora/Transportadora";

const correios: ICorreios = new Correios;
correios.sendCorreios();
correios.reciveCorreios();

const correios1: ICorreios = new TransportadoraAdapter(new Transportadora);
correios1.sendCorreios();
correios1.reciveCorreios();