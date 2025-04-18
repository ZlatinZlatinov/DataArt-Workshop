import { Link, useNavigate } from 'react-router-dom';
import { Vote } from '../../types/jokeType';
import EmojiItem from './emojiItem';
import { deleteJoke } from '../../services/jokeService';
import { useContext } from 'react';
import { JokeContext } from '../../contexts/jokeContext';

export default function JokeInteractions({ votes }: { votes: Vote[] }) {
    const navigate = useNavigate();
    const { joke } = useContext(JokeContext);

    async function handleDeleteJoke() {
        try {
            await deleteJoke(joke._id);
            alert("Joke Deleted Successfully");
            navigate('/joke');
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="flex mt-3 justify-between items-center">
            <ul className="flex text-2xl gap-2.5">
                {votes.map((v, i) => <EmojiItem key={i} vote={v} />)} {/*Not the best idea to use index for key :( */}
            </ul>

            <div className='flex text-2xl gap-3'>
                <Link to={`/update/${joke._id}`}
                    className="border border-white rounded-lg text-base px-3 py-1.5 text-white hover:bg-gray-700 transition-colors duration-200">Update</Link>

                <button onClick={handleDeleteJoke}
                    className="border border-red-500 rounded-lg text-base px-3 py-1.5 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200">Delete</button>
            </div>
        </div>
    );
}