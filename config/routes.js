import express from 'express'
import todosRouter from '../routes/api/v1/todos.js'
import usersRouter from '../routes/api/v1/users.js'
import authRouter from '../routes/api/v1/auth.js'

import authenticate from '../middlewares/authenticate.js'

const router = express.Router()

router.use('/api/v1/todos', authenticate, todosRouter)
router.use('/api/v1/users', usersRouter)
router.use('/api/v1/auth', authRouter)

export default router
