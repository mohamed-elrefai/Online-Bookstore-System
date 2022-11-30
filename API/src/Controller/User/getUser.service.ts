import { Request, Response, NextFunction } from 'express';
import UserModel from '../../Model/User/User.model';

const getUserController = async (req: Request | any, res: Response, next: NextFunction) => {
    try{
        const getUser = await UserModel.findById(req.user.id);
        res.status(200).json({code: 200, status: "OK", getUser})
    next();
    }catch(err){
        res.status(500).json({message: err})
    }
}

export default getUserController