import { toJSON_Book } from "../../InterFace/Book"
export function toJSON(this: toJSON_Book) {
    const book = this
    const bookObject = book.toObject()
    delete bookObject.__v
    return bookObject
}
