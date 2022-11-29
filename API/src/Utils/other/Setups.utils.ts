import cors from 'cors'
import express, { Application } from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

export default (app: Application) => {
    app.use(express.json())
    app.use(cors({
        origin: 'http://localhost:8080/'
    }))
    app.use(helmet())
    app.use(cookieParser())
}
