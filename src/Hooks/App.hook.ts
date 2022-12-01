import { Application } from "express";
import AuthRouter from '../Routers/Auth/Auth.routes'
import UserRouter from '../Routers/User/User.routes'
import BookRouter from '../Routers/Books/Book.routes'

export default (app: Application) => {
    app.use('/api', AuthRouter)
    app.use('/api', UserRouter)
    app.use('/api', BookRouter)
}