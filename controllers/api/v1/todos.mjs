export const list = (req, res) => {
    res.send("GET todos");
};

export const create = (req, res) => {
    res.send("POST todos");
};

export const update = (req, res) => {
    res.send("PUT todos");
};

export const remove = (req, res) => {
    res.send("DEL todos width id: " + req.params.id);
};
