export default class Protein{
    constructor(private _tipo: string, private _weight: number){}
    
    public get tipo(): string {
        return this._tipo
    }
    public set tipo(value: string) {
        this._tipo = value
    }
    
    public get weight(): number {
        return this._weight
    }
    public set weight(value: number) {
        this._weight = value
    }

    
}