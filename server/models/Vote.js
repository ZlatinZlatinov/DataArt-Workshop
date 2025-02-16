const { Schema, model } = require('mongoose');

const voteSchema = new Schema({
    value: {
        type: Number,
        required: true,
        default: 0
    }, 
    label : {
        type: String,
        required: true,
        enum: ['😂', '👍', '❤️']
    }, 
});

const Vote = model('Vote', voteSchema);

module.exports = Vote;