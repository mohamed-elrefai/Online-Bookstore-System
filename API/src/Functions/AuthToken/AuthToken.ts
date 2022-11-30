import jwt from 'jsonwebtoken';
import dotenv from '../../Config/env/env'

const Dotenv = new dotenv()

const maxAge = 45 * 24 * 60 * 60

const TokenCookie = (_id: string) => {
    const token_secret = Dotenv.TokenSecret()
    return jwt.sign({ _id }, token_secret, { expiresIn: maxAge })
}

export default TokenCookie