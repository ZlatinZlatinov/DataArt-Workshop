const { mongooseInit, dispatchMongoose } = require('../config/mongooseInit');
const Joke = require('../models/Joke');

async function seedDb() { //Probably not the best way to seed DB, but it kinda works
    await mongooseInit();

    const data = [];
    const URL = "https://teehee.dev/api/joke";
    const SEED_COUNT = 5;

    for (let i = 0; i < SEED_COUNT; i++) {
        const response = await fetch(URL);
        const { question, answer } = await response.json();

        data.push({
            question,
            answer
        });
    }

    await Joke.insertMany(data);
    console.log("Db seeded!");

    dispatchMongoose();
}

seedDb();