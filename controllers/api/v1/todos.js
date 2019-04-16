const Todo = require('../../../models/Todo');

const getAll = (req, res) => {
    Todo.find({
        "user": req.user._id
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

const create = (req, res, next) => {

    let todo = new Todo();
    todo.text = req.body.text;
    console.log(req.user);
    todo.user = req.user._id;
    todo.completed = false;
    todo.save((err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not save this todo item"
            });
        }

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

const update = (req, res) => {
    let user = req.user._id;
    let todoId = req.params.id;
    Todo.findOneAndUpdate({
        user: user,
        _id: todoId
    }, {
        completed: true
    }, {
        new: true
    }).then(doc => {
        res.json({
            "status": "success",
            "data": {
                todo: doc
            }
        })
    }).catch(err => {
        res.json(err);
    })
}

const remove = (req, res) => {
    let user = req.user._id;
    let todoId = req.params.id;
    Todo.findOneAndDelete({
        user: user,
        _id: todoId
    }).then(result => {
        res.json({
            "status": "success",
            "message": "It's gone!"
        })
    }).catch(err => {
        res.json(err);
    })
}

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;