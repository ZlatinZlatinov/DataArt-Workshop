import { JokeType } from '../types/jokeType';
import JokeInteractions from './jokeInteractions';

export default function Joke({
    joke
}: { joke: JokeType | undefined }) {


    return (<div className="p-4 min-w-2xl bg-gray-900 rounded-xl border-1 border-gray-900">
        <div className="flex justify-center items-start px-4 flex-col gap-1 min-h-28 bg-amber-400 rounded-xl">
            <p className="text-red-800 text-2xl">Q: {joke?.question || '...'}</p>
            <p className="text-red-800 text-2xl">A: {joke?.answer || '...'}</p>
        </div>

        {joke ? <JokeInteractions votes={joke!.votes} id={joke!._id} /> : <>...</>}
    </div>);
}