import { JokeType } from '../../types/jokeType';
import JokeInteractions from './jokeInteractions'

export default function Joke({
    joke
}: { joke: JokeType | undefined }) {


    return (<div className="p-5 w-full min-w-2xl bg-gray-900 rounded-xl shadow-lg border border-gray-700">
        <div className="flex justify-center items-start p-5 flex-col gap-2 min-h-32 bg-amber-400 rounded-xl shadow-inner">
            <p className="text-red-800 text-2xl font-medium">Q: {joke?.question || '...'}</p>
            <p className="text-red-800 text-2xl">A: {joke?.answer || '...'}</p>
        </div>

        {joke ? <JokeInteractions votes={joke!.votes} id={joke!._id} /> : <>...</>}
    </div>);
}