const { Schema, model } = require('mongoose');

const jokeSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    availableVotes: {
        type: [{
            type: String,
            enum: ['😂', '👍', '❤️']
        }],
        default: ['😂', '👍', '❤️']
    },
    votes: {
        type: [],
        default: [{value: 0, label:'😂'}, {value: 0, label:'👍'}, {value: 0, label:'❤️'}]
    }
});

const Joke = model('Joke', jokeSchema);

module.exports = Joke;