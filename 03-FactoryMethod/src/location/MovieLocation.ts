import Movie from "./item/Movie";
import Item from "./item/interface/item";
import Location from "./Location";

export default class MovieLocation extends Location{
    protected createItem(): Item{
        return new Movie;
    }
}