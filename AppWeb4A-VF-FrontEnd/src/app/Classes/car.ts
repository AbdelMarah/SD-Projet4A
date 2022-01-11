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
    description : String;
    promotion:boolean = false;
    available:boolean = true;
    photoName : String;
    clientNumero: number;
    
    client : Client;
    category : Category;
}
