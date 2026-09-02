import { Router } from "express";
import {
    list,
    create,
    update,
    remove,
} from "../../../controllers/api/v1/todos.mjs";

const router = Router();

router.get("/api/v1/todos", list);
router.post("/api/v1/todos", create);
router.put("/api/v1/todos/:id", update);
router.delete("/api/v1/todos/:id", remove);

export default router;
