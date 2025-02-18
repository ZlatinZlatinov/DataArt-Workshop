import { useEffect, useState } from 'react';
import { getRandomJoke } from '../services/jokeService';
import { JokeType } from '../types/jokeType';
import JokeInteractions from './jokeInteractions';

export default function Joke() {
    const [joke, setJoke] = useState<JokeType>();

    useEffect(() => {
        try {
            async function getJoke() {
                const data = await getRandomJoke();
                setJoke(data);
            }

            getJoke();
        } catch (err) {
            alert(err);
        }
    }, []);

    return (<div className="p-4 min-w-2xl bg-gray-900 rounded-xl">
        <div className="flex justify-center items-start px-4 flex-col gap-1 min-h-28 bg-amber-400 rounded-xl">
            <p className="text-red-800 text-2xl">Q: {joke?.question || '...'}</p>
            <p className="text-red-800 text-2xl">A: {joke?.answer || '...'}</p>
        </div>

        {joke ? <JokeInteractions votes={joke!.votes} id={joke!._id} /> : <>...</>}

        <button onClick={async () => {
            const data = await getRandomJoke();
            setJoke(data);
        }}>NEXT</button>
    </div>);
}