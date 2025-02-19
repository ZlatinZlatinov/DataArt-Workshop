const jokeController = require('express').Router();
const {
    getRandomJoke,
    submitVote,
    updateJoke,
    deleteJoke,
    getJokeById
} = require('../services/jokeService');

jokeController.get('/', async (req, res) => {
    try {
        const [joke] = await getRandomJoke();

        res.json(joke);
    } catch (err) {
        res.status(404).end();
    }
}); 

jokeController.get('/:jokeId', async (req, res) => {
    const jokeId = req.params.jokeId;

    try {
        const joke = await getJokeById(jokeId);

        res.json(joke);
    } catch (err) { 
        res.status(404).end();
    }
});

jokeController.post('/:jokeId', async (req, res) => {
    const jokeId = req.params.jokeId;
    const { label } = req.body;

    try {
        await submitVote(jokeId, label);
        res.status(201).end();
    } catch (err) {
        console.error(err);
        res.status(400).end();
    }
});

jokeController.put('/:jokeId', async (req, res) => {
    const jokeId = req.params.jokeId;
    const { question, answer } = req.body;

    try {
        const joke = await updateJoke(jokeId, question, answer);
        res.json(joke);
    } catch (err) {
        res.status(400).end();
    }
});

jokeController.delete('/:jokeId', async (req, res) => {
    const jokeId = req.params.jokeId;

    try {
        await deleteJoke(jokeId);
        res.status(204).end();
    } catch (err) {
        res.status(400).end();
    }
});

module.exports = jokeController;