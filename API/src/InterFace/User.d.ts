import { Document } from 'mongoose'

interface AddressInterface{
    streetAddress: string
    city: string
    country: string
}

interface UserIntrfaces{
    _id: string
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    address: AddressInterface
    phoneNumber: string
    avatarUrl: string
    currentAmount: number
    token: string
}

export interface toJSON_User extends UserIntrfaces, Document {
    toJSON: () => any // any for now
}

export default UserIntrfaces