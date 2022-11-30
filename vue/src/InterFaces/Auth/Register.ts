interface AddressInterface{
    streetAddress: string
    city: string
    country: string
}
interface RegisterInterface{
    firstName: string
    lastName: string
    email: string
    password: string,
    address: AddressInterface
    phoneNumber: string
    error: string
}

export default RegisterInterface