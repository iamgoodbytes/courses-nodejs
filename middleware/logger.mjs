const log = (req, res, next) => {
    console.log("👽👽👽");
    next();
};

export default log;
