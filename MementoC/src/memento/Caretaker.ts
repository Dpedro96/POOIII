import IMemento from "./IMemento";
import Originator from "./Originator";

export default class CareTaker {
    private mementos: IMemento[] = []
    private readonly originator: Originator

    constructor(originator: Originator){
        this.originator = originator
    }

    public backup(): void{
        console.log('\nBackup: salvando nickname')
        this.mementos.push(this.originator.save())
    }

    public undo(): void{
        const memento = this.mementos.pop()
        if(!memento){
            console.log('Nenhum backup salvo')
            return;
        }
        this.originator.restore(memento);
        console.log(`Backup: ${memento.getName()}: nick restaurado com sucesso`)   
    }

    public showHistory():void{
        console.log('Mementos Salvos:')
        for (const memento of this.mementos){
            console.log(memento);
        }
    }

}