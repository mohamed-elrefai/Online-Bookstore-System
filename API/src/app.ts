import 'dotenv/config'
import dotenv from './Config/env/env'
import express, { Application } from 'express'
import SetupsUtils from './Utils/other/Setups.utils'
import MongoDb from './Utils/DB/Mongo.db'
import AppHook from './Hooks/App.hook'
const app: Application = express()

SetupsUtils(app)

MongoDb(app)

AppHook(app)

const Dotenv = new dotenv()

app.get('/', (_req, res) => {
    res.status(200).json({ code: 200, statuse: 'OK', message: Dotenv.MongoDBLINK()})
})
app.listen(1999)
export default app
