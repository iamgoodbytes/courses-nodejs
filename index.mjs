import express from "express";
import log from "./middleware/logger.mjs";
import todosRouter from "./routers/api/v1/todos.mjs";

const app = express();
const port = 3000;

app.use(todosRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
