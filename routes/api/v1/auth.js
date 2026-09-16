import express from 'express'
import { login } from '../../../controllers/api/v1/auth.js'

const router = express.Router()
router.post('/login', login)

export default router
