import { useContext } from "react";
import { JokeContext } from "../contexts/jokeContext";
import { getRandomJoke } from "../services/jokeService";

export default function NextBtn() {
    const { handleGetNewJoke } = useContext(JokeContext);

    async function getNextJoke() {
        try {
            const data = await getRandomJoke();
            handleGetNewJoke(data);
        } catch (err) {
            alert("Failde to set new joke");
        }
    }

    return <button
        className="w-full max-2-2xl py-3 px-4 rounded-md bg-amber-500 text-gray-900 font-medium hover:bg-amber-600 transition-colors duration-200 shadow-md mt-4"
        onClick={getNextJoke}>NEXT</button>;
}