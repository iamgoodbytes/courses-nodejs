const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    text: String,
    user: String,
    completed: Boolean
})
const Todo = mongoose.model('Todo', todoSchema);

const getAll = (req, res) => {
    Todo.find({
        "user": "Joris"
    }, (err, docs) => {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "todos": docs
                }
            });
        }
    });


}

const create = (req, res) => {
    let todo = new Todo();
    todo.text = "My first todo";
    todo.user = "Joris";
    todo.completed = false;
    todo.save((err, doc) => {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "todo": doc
                }
            });
        }
    })


}

module.exports.getAll = getAll;
module.exports.create = create;