import { JokeType } from "../types/jokeType";

const URL = "http://localhost:3030/api/";

export async function getRandomJoke(): Promise<JokeType> {
    const response: any = await fetch(URL + 'joke');

    if (response.status !== 200) {
        throw new Error("Joke not found!");
    }

    const data: JokeType = await response.json();

    return data;
}

export async function submitVote(jokeId: string, label: string) {
    const response = await fetch(URL + `joke/${jokeId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({label})
    });

    return response.ok;
};