import cors from 'cors'
import express, { Application } from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import fileUpload from 'express-fileupload'

export default (app: Application) => {
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use(cookieParser())
    app.use(fileUpload({
        useTempFiles: true,
        tempFileDir: './uploads'
    }))
}
