import IMemento from "./IMemento";

export default class ConcreteMemento implements IMemento{
    private nick: string;
    private name: string;
    private data: Date;

    constructor(nick: string, name: string, data:Date ){
        this.nick = nick;
        this.name = name;
        this.data = data;
    }
    
    getNick(): string {
        return this.nick;
    }
    getName(): string {
        return this.name;
    }
    getData(): Date {
        return this.data;
    }

}