const config = require('./config/config');
const routes = require('./config/routes');
const {mongooseInit} = require('./config/mongooseInit');
const {expressInit} = require('./config/expressInit');

async function startServer() {
    const app = require('express')();

    expressInit(app);
    app.use('/api', routes);

    await mongooseInit();

    app.listen(config.port, () => { console.log(`Listening on port ${config.port} ...`); });
}

startServer();