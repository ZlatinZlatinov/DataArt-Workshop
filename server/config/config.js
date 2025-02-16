const env = process.env.NODE_ENV || 'development';

const local_db_name = 'voting-game';

const config = {
    development: {
        port: process.env.PORT || 3030,
        dbURL: 'mongodb://localhost:27017/' + local_db_name,
        origin: ['http://localhost:5173']
    },
    production: {
        port: process.env.PORT || 3000,
        dbURL: process.env.DB_URL_CREDENTIALS,
        origin: []
    }
}

module.exports = config[env];