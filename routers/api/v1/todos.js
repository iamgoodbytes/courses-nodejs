const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send("GET todos");
});

router.post('/', (req, res) => {
    res.send("POST todos");
});

router.put('/:id', (req, res) => {
    res.send("PUT todos");
});

router.delete('/:id', (req, res) => {
    res.send("DELETE todo " + req.params.id);
});

module.exports = router;