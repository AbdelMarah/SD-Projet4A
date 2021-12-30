import { User } from "./User";

export interface Car {
    [x: string]: any;
    id : number;
    name : String;
    imageUrl : String;
    energie : String;
    nbPlaces: number;
    kilometrage : number;
    boiteAvitesse : String;
    description : String;
    carOwner : User;
}

