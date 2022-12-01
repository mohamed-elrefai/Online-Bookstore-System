import UserModel from "../../Model/User/User.model";
import { Request, Response, NextFunction } from 'express';
export const DeleteUserController = async (req: Request | any, res: Response, next: NextFunction) => {
    try{
        await UserModel.findByIdAndDelete(req.user.id)
        res.status(200).json("Profile Deleted")
        next()
    }catch(err){
        res.status(500).json({message: err});
    }
}