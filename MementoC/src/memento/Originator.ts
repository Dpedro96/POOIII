import ConcreteMemento from "./ConcreteMemento"
import IMemento from "./IMemento"

export default class Originator{
    private _nick: string;

    constructor(nick : string){
        this._nick = nick
    }

    setNick(nick: string) {
        this._nick = nick;
    }

    save(): Readonly<IMemento>{
        const data = new Date();
        return new ConcreteMemento( this._nick, data.toISOString(), data);
    }

    restore(memento: IMemento):void{
        const concreateMemento = memento as ConcreteMemento;
        this._nick = concreateMemento.getNick();
        console.log(`Originator: meu estado mudou para: ${this._nick}`)
    }
}