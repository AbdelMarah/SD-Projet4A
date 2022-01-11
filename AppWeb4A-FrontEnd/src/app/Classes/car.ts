import { Client } from "./client";
import { Category } from "./category";

export class Car {
    id : number;
    name : String;
    marque : String;
    energie : String;
    nbPlaces: number;
    kilometrage : number;
    boiteAvitesse : String;
    moteurCapacite : String;
    puissance: number;
    currentPrice : number;
    ville : String;
    photoName : String;

    client : Client;
    category : Category;
}
