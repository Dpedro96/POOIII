import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SandwichType from "../components/SandwichType";
import Sauces from "../components/Sauces";
import Sandwich from "../produts/Sandwich";


export default interface IBuilder{
    reset(): void;
    getSandwich(): Sandwich;
    addSauces(sauces: Sauces);
    setSandwichType(value: SandwichType);
    setBread(bread: Bread);
    setProtein(protein: Protein);
    setSalad(salad: Salad);
}