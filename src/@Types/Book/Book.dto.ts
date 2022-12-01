import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class BookDto{

    @IsString()
    userID: string
    
    @IsString()
    bookName: string
    
    @IsString()
    bookAuther: string

    @IsString()
    bookImage: string
    
    @IsBoolean()
    bookSale: boolean
    
    @IsString()
    bookType: string

    @IsNumber()
    price: number

    @IsString()
    desc: string
    
    @IsString()
    lang: string
}