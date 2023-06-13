import Game from "./item/Game";
import Item from "./item/interface/item";
import Location from "./Location";

export default class GameLocation extends Location{
    protected createItem(): Item {
        return new Game;
    }
} 