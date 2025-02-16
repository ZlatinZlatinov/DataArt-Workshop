const { Schema, model } = require('mongoose');
//TODO: seed db from the provided API
const jokeSchema = new Schema({
    question: {
        type: String,
        required: true
    }, 
    answer : {
        type: String,
        required: true
    }, 
    votes: [{type: Schema.Types.ObjectId, ref: 'Vote'}]
});

const Joke = model('Joke', jokeSchema);

module.exports = Joke;