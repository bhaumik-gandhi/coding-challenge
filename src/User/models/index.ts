export interface Geo {
    lat: number,
    lon: number
}

export interface Address {
    firstLine: string, 
    city: string, 
    country:string, 
    geo: Geo
}

export interface User {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    address: Address
}