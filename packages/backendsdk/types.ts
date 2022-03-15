
export enum Packages {
    BASIC_PACKAGE = "basic_package"
}
export interface IUser {
    username: string,
    email: string,
    password: string,
    phone: string,
    dob: string,
    firstName: string,
    lastName: string,
    intendedUse: string,
    occupation: string,
    address: string,
    city: string,
    province: string,
    package: Packages,
    unit: string,
    accepted_terms : boolean
}

export interface IStrapiV4Response<T> {
    data : T
    meta : any
    error : {
        status : string
        name : string
        message : string
        details : any
    }
    status: number
    _response : Response
}