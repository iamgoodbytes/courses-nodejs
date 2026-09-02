import express from 'express'
import { list, create, remove, update } from '../../../controllers/api/v1/todos.js'

const router = express.Router()

router.get('/', list)
router.post('/', create)
router.delete('/:id', remove)
router.put('/:id', update)

export default router
