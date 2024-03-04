import { ICar } from "../interface/interface.cars";

export const CarsList : ICar[] = [];

let id = 0;

export const generateId = () =>{
    id++;
    return id;
}



