export default class Salad{
    constructor(private _salad: string){};

    public get salad(): string {
        return this._salad;
    }
    public set salad(value: string) {
        this._salad = value;
    }
}