import { connect, ConnectOptions } from 'mongoose'
import { Request, Response, Application } from 'express'
import dotenv from '../../Config/env/env'

export default (app: Application) => {
    connect(
        new dotenv().MongoDBLINK(),
        { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions,
    )
        .then(() => {
            app.get('/connectDatabase', (_req: Request, res: Response) => {
                res.status(200).json({ code: 200, statuse: 'OK', message: 'database is connected, 🥳'})
            })
        })
        .catch((err) => console.log(err))
}
