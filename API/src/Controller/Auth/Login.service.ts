import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs'
import UserModel from '../../Model/User/User.model';
import { LoginDto } from '../../@Types/Auth/Login.dto';

export const LoginController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const data: LoginDto = req.body

        const getEmail = await UserModel.findOne({email: data.email});
        if(!getEmail){
            res.status(403).json({code: 403, statuse: 'Faild', message: "email already used"})
        }
        const getPassword = await bcrypt.compare(req.body.password, getEmail!.password);
        if(!getPassword){
            res.status(403).json({code: 403, statuse: 'Faild', message: "email already used"})
        }

        if(getEmail && getPassword){
            res.status(200).json({code: 200, statuse: 'OK',getEmail})
            next();
        }
    }catch(err){
        res.status(500).json({message: err});
    }
}