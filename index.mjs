import express from "express";

const app = express();
const port = 3000;

app.get("/api/v1/todos", (req, res) => {
    res.send("GET todos");
});

app.post("/api/v1/todos", (req, res) => {
    res.send("POST todos");
});

app.put("/api/v1/todos/:id", (req, res) => {
    res.send("PUT todos");
});

app.delete("/api/v1/todos/:id", (req, res) => {
    res.send("DEL todos width id: " + req.params.id);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
