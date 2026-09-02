import express from 'express'
import todosRouter from '../routes/api/v1/todos.js'

const router = express.Router()

router.use('/api/v1/todos', todosRouter)

export default router
