import 'dotenv/config'
// import dotenv from './Config/env/env'
import express, { Application } from 'express'
import SetupsUtils from './Utils/other/Setups.utils'
import MongoDb from './Utils/DB/Mongo.db'
import AppHook from './Hooks/App.hook'
import AppSetup from './Utils/other/App.Setup'

const app: Application = express()

SetupsUtils(app)

MongoDb(app)

AppHook(app)

AppSetup(app)

app.listen(1999)
export default app
