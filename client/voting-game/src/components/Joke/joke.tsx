import { useContext, useEffect } from 'react';
import JokeInteractions from './jokeInteractions'
import { JokeContext } from '../../contexts/jokeContext';
import { getRandomJoke } from '../../services/jokeService';

//TODO: Something is causing too many re-renders
export default function Joke() {
    const { joke, handleGetNewJoke } = useContext(JokeContext);

    useEffect(() => {
        getNewJoke();
    }, [joke._id]);

    async function getNewJoke() {
        try {
            const data = await getRandomJoke();
            handleGetNewJoke(data);
        } catch (err) {
            alert("Failed to set a Joke")
        }
    }

    return (<div className="p-5 w-full min-w-2xl bg-gray-900 rounded-xl shadow-lg border border-gray-700">
        <div className="flex justify-center items-start p-5 flex-col gap-2 min-h-32 bg-amber-400 rounded-xl shadow-inner">
            <p className="text-red-800 text-2xl font-medium">Q: {joke?.question || '...'}</p>
            <p className="text-red-800 text-2xl">A: {joke?.answer || '...'}</p>
        </div>

        {joke._id ? <JokeInteractions votes={joke.votes}/> : <>Loading...</>}
    </div>);
}