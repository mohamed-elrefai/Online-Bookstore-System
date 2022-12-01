import { Request, Response, NextFunction } from 'express';
import { BookModel } from '../../Model/Books/Books.model';
import uploadFile from '../../Functions/AWS/UploadFiles';
import { BookDto } from '../../@Types/Book/Book.dto';

export const AddBookController = async (req: Request | any, res: Response, next: NextFunction) => {
    try{
        const data: BookDto = req.body;

        // add User id
        const userID = req.user._id;
        data.userID = userID;

        //add fileName
        await uploadFile(req.files.file);

        const add_books = await new BookModel(data) 
        await add_books.save()
        res.status(200).json({code: 200, status: 'success', message: "data saved successfully"})
        next()
    }catch(err){
        res.status(500).json({message: err})
    }
}