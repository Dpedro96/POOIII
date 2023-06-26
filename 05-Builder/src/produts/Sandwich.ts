import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SandwichType from "../components/SandwichType";
import Sauces from "../components/Sauces";

export default class Sandwich{
    private _sandwichtype: SandwichType;
    private _bread: Bread;
    private _protein: Protein[] = [];
    private _salad: Salad[] = []; 
    private _sauces: Sauces[] = [];

    public get sauces(): Sauces[] {
        return this._sauces;
    }
    public set suces(value: Sauces[]) {
        this._sauces = value;
    }

    public get sandwichtype(): SandwichType {
        return this._sandwichtype;
    }
    public set sandwichtype(value: SandwichType) {
        this._sandwichtype = value;
    }
    
    public get protein(): Protein[] {
        return this._protein;
    }
    public set protein(value: Protein[]) {
        this._protein = value;
    }
    
    public get salad(): Salad[] {
        return this._salad;
    }
    public set salad(value: Salad[]) {
        this._salad = value;
    }

    public get bread() {
        return this._bread;
    }
    public set bread(value) {
        this._bread = value;
    }
    
    public addSauces(sauces : Sauces){
        this._sauces.push(sauces);
    }
    public setProtein(protein: Protein) {
        this._protein.push(protein);
    }
    public setSalad(salad: Salad) {
        this._salad.push(salad);
    }
}