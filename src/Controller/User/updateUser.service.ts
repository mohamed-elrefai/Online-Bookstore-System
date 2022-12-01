import UserModel from "../../Model/User/User.model";
import { Request, Response, NextFunction } from 'express';
export const updateUserController =async (req: Request | any, res: Response, next: NextFunction) => {
    try{
        await UserModel.findByIdAndUpdate(req.user.id, {
            $set: req.body
        })
        res.status(200).json("Profile Updated")
        next()
    }catch(err){
        res.status(500).json({message: err});
    }
}