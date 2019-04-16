const getAll = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "todos": []
        }
    });
}

const create = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "todo": {
                "text": "Learn Node.js"
            }
        }
    });
}

module.exports.getAll = getAll;
module.exports.create = create;