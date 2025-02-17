const Joke = require('../models/Joke');

async function getRandomJoke() { // Returns a random joke
    return Joke.aggregate([{ $sample: { size: 1 } }]);
}

async function createJoke(payload) {
    const joke = await Joke.create(payload);
    return joke;
}

async function submitVote(jokeId, label) {
    const joke = await Joke.findById(jokeId);

    if (joke.votes.length > 0) {
        for (let i = 0; i < joke.votes.length; i++) {
            let vote = joke.votes[i];

            if (vote.label === label) {
                vote.value += 1;
                joke.votes[i] = vote;
                await joke.save();
                return;
            }
        }

        joke.votes.push({ value: 1, label });
    } else {
        joke.votes.push({ value: 1, label });
    }

    await joke.save();
}

async function updateJoke(jokeId, question, answer) {
    const options = { new: true };

    const joke = await Joke.findByIdAndUpdate(jokeId, { question, answer }, options);
    return joke;
}

async function deleteJoke(jokeId) {
    await Joke.findByIdAndDelete(jokeId);
}
module.exports = {
    getRandomJoke,
    createJoke,
    submitVote,
    updateJoke,
    deleteJoke
}