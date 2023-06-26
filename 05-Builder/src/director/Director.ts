import IBuilder from "../builders/IBuilder";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SandwichType from "../components/SandwichType";
import Sauces from "../components/Sauces";


export default class Director{
    constructor(private builder: IBuilder){}

    constructHotDog(){
        this.builder.setSandwichType(SandwichType.HOTDOG)
        this.builder.setBread(Bread.BANHA)
        this.builder.setProtein(new Protein("salsicha", 50))
        this.builder.setProtein(new Protein("salsicha", 50));
        this.builder.addSauces(new Sauces("Ketchup"));
        this.builder.addSauces(new Sauces("Maionese Natural"));
        this.builder.addSauces(new Sauces("Mostarda"));
        this.builder.setSalad(new Salad("Vinagre"));
    };

    constructHamburguer(){
        this.builder.setSandwichType(SandwichType.XSALADA)
        this.builder.setBread(Bread.BRIOCHE)
        this.builder.setProtein(new Protein("Hamburguer", 250))
        this.builder.setProtein(new Protein("Bacon", 50))
        this.builder.addSauces(new Sauces("Caseiro"));
        this.builder.setSalad(new Salad("Alface"));
        this.builder.setSalad(new Salad("Tomate"));
        this.builder.setSalad(new Salad("Picles"));
    };
}