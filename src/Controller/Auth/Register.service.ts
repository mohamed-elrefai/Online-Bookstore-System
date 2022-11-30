import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs'
import UserModel from '../../Model/User/User.model';
import { RegisterDto } from '../../@Types/Auth/Register.dto';

const RegisterController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const data: RegisterDto = req.body

        // create username
        data.username = req.body.firstName + '_' + req.body.lastName

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt)
        data.password = password

        // find email to check if email already use or not
        const findEmail = await UserModel.findOne({email: req.body.email})
        if(findEmail){
            res.status(403).json({code: 403, statuse: 'Faild', message: "email already used"})
        }else{
            const user = await new UserModel(data)
            const newUser = await user.save()
            res.status(200).json({code: 200, statuse: 'OK',newUser})
            
            next();
        }
    }catch(err){
        res.status(500).json({message: err});
    }
}

export default RegisterController