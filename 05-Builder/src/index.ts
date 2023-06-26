import SandwichBuilder from "./builders/SandwichBuilder";
import Director from "./director/Director";
import Sandwich from "./produts/Sandwich";

const builder  : SandwichBuilder = new SandwichBuilder()
const director : Director = new Director(builder);

director.constructHotDog();
const hotdog: Sandwich = builder.getSandwich();
console.log("Crinado HotDog: " + hotdog.sandwichtype);
console.log("Pao: " + hotdog.bread);
console.log("Proteina: " + hotdog.protein.length);
console.log("Salad: " + hotdog.salad.length);
console.log("Sauces: " + hotdog.sauces.length);

director.constructHamburguer();
const hamburguer: Sandwich = builder.getSandwich();
console.log("Crinado Hamburguer: " + hamburguer.sandwichtype);
console.log("Pao: " + hamburguer.bread);
console.log("Proteina: " + hamburguer.protein.length);
console.log("Salada: " + hamburguer.salad.length);
console.log("Molhos: " + hamburguer.sauces.length);