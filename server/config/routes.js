const jokeController = require("../controllers/jokeController");

module.exports = (app) => {
    app.use('/api/joke', jokeController);
}