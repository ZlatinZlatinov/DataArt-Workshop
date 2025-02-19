import { Link, useNavigate } from 'react-router-dom';
import { Vote } from '../types/jokeType';
import EmojiItem from './emojiItem';
import { deleteJoke } from '../services/jokeService';

export default function JokeInteractions({
    votes, id
}: { votes: [Vote] | [], id: string }) {
    const navigate = useNavigate();

    async function handleDeleteJoke() {
        try {
            await deleteJoke(id);
            alert("Joke Deleted Successfully");
            navigate('/joke');
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="flex mt-2 justify-between">
            <ul className="flex text-2xl gap-2.5">
                {votes.map((v, i) => <EmojiItem key={i} vote={v} id={id} />)} {/*Not the best idea to use index for key :( */}
            </ul>

            <div>
                <Link to={`/update/${id}`} className="border-1 border-white rounded-lg text-lg p-1 mr-2 text-white hover:bg-gray-500">Update</Link>
                <button onClick={handleDeleteJoke} className="border-1 border-white rounded-lg text-lg p-1 mr-2 text-red-600 hover:bg-gray-500">Delete</button>
            </div>
        </div>
    );
}