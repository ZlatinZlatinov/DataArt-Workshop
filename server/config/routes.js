const jokeController = require("../controllers/jokeController");

module.exports = (app) => {
    app.use('/joke', jokeController);
}