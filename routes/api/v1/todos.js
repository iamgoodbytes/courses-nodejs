const express = require('express');
const router = express.Router();
const todosController = require('../../../controllers/api/v1/todos');

/* /api/v1/todos */
router.get("/", todosController.getAll);
router.post("/", todosController.create);
router.put("/:id", todosController.update);

module.exports = router;