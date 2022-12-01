import { Schema, model } from "mongoose";
import { toJSON } from "../../@Types/toJson/Book.tojson";
import { Book } from "../../InterFace/Book";

const BookSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    bookName: {
        type: String,
        required: true
    },
    bookAuther: {
        type: String,
        required: true
    },
    bookImage: {
        type: String,
        required: true
    },
    bookSale: {
        type: Boolean,
        default: false,
    },
    bookType: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    desc: {
        type: String,
        required: true
    },
    lang: {
        type: String,
        required: true
    },
},{
    timestamps: true,
})

BookSchema.methods.toJSON = toJSON;

export const BookModel = model<Book>('Book', BookSchema)