import { Router } from "express";
const router = Router();

router.get("/api/v1/todos", (req, res) => {
    res.send("GET todos");
});

router.post("/api/v1/todos", (req, res) => {
    res.send("POST todos");
});

router.put("/api/v1/todos/:id", (req, res) => {
    res.send("PUT todos");
});

router.delete("/api/v1/todos/:id", (req, res) => {
    res.send("DEL todos width id: " + req.params.id);
});

export default router;
