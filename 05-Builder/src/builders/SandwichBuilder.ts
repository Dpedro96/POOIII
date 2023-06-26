import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SandwichType from "../components/SandwichType";
import Sauces from "../components/Sauces";
import Sandwich from "../produts/Sandwich";
import IBuilder from "./IBuilder";

export default class SandwichBuilder implements IBuilder{

    private sandwich = new Sandwich();

    reset(): void {
        this.sandwich = new Sandwich();
    }
    getSandwich(): Sandwich {
        const result: Sandwich = this.sandwich;
        this.reset();
        return result;
    }
    addSauces(sauces: Sauces) {
        this.sandwich.addSauces(sauces);
    }
    setSandwichType(value: SandwichType) {
        this.sandwich.sandwichtype = value;
    }
    setBread(bread: Bread) {
        this.sandwich.bread = bread;
    }
    setProtein(protein: Protein) {
        this.sandwich.setProtein(protein);
    }
    setSalad(salad: Salad) {
        this.sandwich.setSalad(salad);
    }

    
}