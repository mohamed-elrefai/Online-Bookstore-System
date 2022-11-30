import jwt from 'jsonwebtoken';
import dotenv from '../../Config/env/env'

const Dotenv = new dotenv()

const maxAge = 48 * 24 * 60 * 60

const CookieEmail = (email: string, password: string) => {
    const token_secret = Dotenv.TokenSecret()
    return jwt.sign({ email, password }, token_secret, { expiresIn: maxAge })
}

export default CookieEmail