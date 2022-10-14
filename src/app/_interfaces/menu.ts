import {IUser} from "./user";

export interface IMenu{
    id: number,
    label: string,
    priceDF: string,
    jours: string
}

export interface IDataMenu{
    data: IMenu[]

}
