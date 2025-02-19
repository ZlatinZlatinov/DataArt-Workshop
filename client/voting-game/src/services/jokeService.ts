import { inputValues, JokeType } from "../types/jokeType";

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
        body: JSON.stringify({ label })
    });

    return response.ok;
};

export async function getJokeById(jokeId: string | undefined): Promise<JokeType> {
    const response = await fetch(URL + `joke/${jokeId}`);

    if (response.status !== 200) {
        throw new Error("Joke not found!");
    }

    const data: JokeType = await response.json();

    return data;
}

export async function updateJoke(jokeId: string | undefined, payload: inputValues): Promise<JokeType> {
    console.log(jokeId);

    const response = await fetch(URL + `joke/${jokeId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error("Failde to Update Joke");
    }

    const data: JokeType = await response.json();

    return data;
}

export async function deleteJoke(jokeId: string): Promise<void> {
    const response = await fetch(URL + `joke/${jokeId}`, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error("Failed to delete joke!");
    }
}