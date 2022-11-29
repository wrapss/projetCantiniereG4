export interface IUser {
    id:number,
    firstname: string,
    name: string,
    email: string,
    phone: string,
    sex: number,
    address: string,
    postalCode: string,
    town: string,
    isLunchLady: number,
    wallet: number,
    imageId: number
    registrationDate: string,
    status: string
}

export interface ISingleUser{
    data: IUser
}

export interface IDataUser{
    data: IUser[]
}

export interface ITokenUser{
    id: number,
    nom: string,
    prenom: string,
    email: string,
    iap?: number,
    exp?: number
}
