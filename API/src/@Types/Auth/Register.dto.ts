import { IsString, IsNumber } from "class-validator";

class Address{
    @IsString()
    streetAddress: string;

    @IsString()
    city: string;

    @IsString()
    country: string;
}

export class RegisterDto{
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    username: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    address: Address;

    @IsString()
    phoneNumber: string;

    @IsNumber()
    currentAmount: string;

    @IsString()
    avatarUrl: string;

    @IsString()
    token: string;
}