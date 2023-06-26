export default class Sauces{
    constructor(private _sauces: string){};

    public get sauces(): string {
        return this._sauces;
    }
    public set sauces(value: string) {
        this._sauces = value;
    }
}