import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import 'dotenv/config'
import dbConnect from './config/mongo'
import { router } from './routes'


const PORT = process.env.PORT || 3000 
const app = express()
app.use(cors())
app.use(express.json())
dbConnect().then(()=>console.log('base de datos conectada'))
app.use(morgan('dev'))
app.use(router)

app.listen(PORT,()=>console.log('servidor levantado '))