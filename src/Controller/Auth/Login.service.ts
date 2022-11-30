import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs'
import UserModel from '../../Model/User/User.model';
import { LoginDto } from '../../@Types/Auth/Login.dto';
import TokenCookie from '../../Functions/AuthToken/AuthToken';
import CookieEmail from '../../Functions/jwt/Cookie.jwt'

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
            const token = TokenCookie(getEmail._id)
            getEmail.token = token

            // Create Cookie
            const __Set = CookieEmail(getEmail.email, getEmail.password);
            res.cookie('__SET', __Set, {httpOnly: true, maxAge: 45* 60 * 60 * 24 * 1000})
            res.status(200).json({code: 200, statuse: 'OK',getEmail})
            next();
        }
    }catch(err){
        res.status(500).json({message: err});
    }
}