const express = require('express')
const logger = require('./middleware/logger')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/v1/todos', (req, res) => {
    res.send("GET todos");
});

app.post('/api/v1/todos', (req, res) => {
    res.send("POST todos");
});

app.put('/api/v1/todos/:id', (req, res) => {
    res.send("PUT todos");
});

app.delete('/api/v1/todos/:id', (req, res) => {
    res.send("DELETE todo " + req.params.id);
});

// GET  api/v1/todos
// POST api/v1/todos
// PUT  api/v1/todos/3
// DEL  api/v1/todos/3


app.listen(port, () => console.log(`Example app listening on port ${port}!`))