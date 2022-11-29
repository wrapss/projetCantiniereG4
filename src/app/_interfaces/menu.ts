import {IUser} from "./user";

export interface IMenu{
    id: number,
    label: string,
    priceDF: string,
    availableForWeeksAndDays: IValueAvailable[],
    imageId: string,
    meals: string,
    status: string,
}

export interface IDataMenu{
    data: IMenu[]

}

export interface IValueAvailable{
    day: number,
    week: number
}
