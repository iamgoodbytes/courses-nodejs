import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import logger from 'morgan'
import 'dotenv/config'
import createError from 'http-errors'
import errorHandler from './middlewares/error-handler.js'
import routes from './config/routes.js'

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use(routes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use(errorHandler)

export default app
