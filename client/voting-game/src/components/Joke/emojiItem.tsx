import { useState } from "react";
import { Vote } from "../../types/jokeType";
import { submitVote } from "../../services/jokeService";

export default function EmojiItem({
    vote, id
}: { vote: Vote, id: string }) {
    const [value, setValue] = useState(vote.value);

    async function sendVote() {
        const result = await submitVote(id, vote.label);

        if (result) {
            setValue((old) => old + 1);
        } else {
            alert("Voting failed!");
        }
    }

    return (<li className="flex flex-col items-center">
        <button 
        className="hover:bg-gray-700 p-1.5 rounded-full transition-colors duration-200" 
        onClick={sendVote}>
            {vote?.label}
        </button>

        <span className="text-xs text-gray-300 mt-1">{value}</span>
    </li>);
}