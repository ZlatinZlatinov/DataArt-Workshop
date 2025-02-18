import { useState } from "react";
import { Vote } from "../types/jokeType";
import { submitVote } from "../services/jokeService";

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

    return (<li>
        <button className="hover:bg-gray-500 p-0.5" onClick={sendVote}>
            {vote?.label}
        </button>
        <span className="text-xs text-white">{value}</span>
    </li>);
}