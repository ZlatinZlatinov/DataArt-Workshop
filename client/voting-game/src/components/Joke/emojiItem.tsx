import { useContext, useState } from "react";
import { Vote } from "../../types/jokeType";
import { submitVote } from "../../services/jokeService";
import { JokeContext } from "../../contexts/jokeContext";

export default function EmojiItem({ vote }: { vote: Vote }) {
    const { joke, handleAddVote } = useContext(JokeContext);

    async function sendVote() {
        const result = await submitVote(joke._id, vote.label);

        if (result) {
            handleAddVote(vote.label);
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

        <span className="text-xs text-gray-300 mt-1">{vote.value}</span>
    </li>);
}