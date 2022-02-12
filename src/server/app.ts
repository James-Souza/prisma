import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import { router } from '../router/index'

export const app = express()

app.use(express.json())
app.use(cors({origin: 'http://localhost:8080'}))

app.use('/', router)
// app.use(cors())
app.use(logger('dev'))