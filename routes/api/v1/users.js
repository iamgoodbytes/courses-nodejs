import express from 'express'
import { create } from '../../../controllers/api/v1/users.js'

const router = express.Router()

router.post('/', create)

export default router
