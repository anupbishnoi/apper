var bodyParser = require("body-parser");

module.exports = function (app) {
    app.use(function (req, res, next) {
        req.middlewareProperty = "lol";
        next();
    });
    
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
};