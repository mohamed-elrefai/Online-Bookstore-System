import { Document } from 'mongoose'

export interface Book{
    userID: string
    bookName: string
    bookAuther: string
    bookImage: string
    bookSale: boolean
    bookType: string
    bookDownload: any
    price: number
    desc: string
    lang: string
}

export interface toJSON_Book extends Book, Document {
    toJSON: () => any // any for now
}