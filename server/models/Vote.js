const { Schema, model } = require('mongoose');

const voteSchema = new Schema({
    value: {
        type: Number,
        required: true
    }, 
    label : {
        type: String,
        required: true
    }
});

const Vote = model('Vote', voteSchema);

module.exports = Vote;