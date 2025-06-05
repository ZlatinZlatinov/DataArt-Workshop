import { createContext, ReactNode, useState } from "react";
import { JokeType, AvailableVotes } from "../types/jokeType";

interface JokeContextType {
    joke: JokeType;
    handleUpdateJoke: (question: string, answer: string) => void;
    handleAddVote: (label: AvailableVotes) => void;
    handleGetNewJoke: (joke: JokeType) => void;
}

const initialJoke: JokeType = {
    _id: "",
    question: "",
    answer: "",
    votes: []
};

export const JokeContext = createContext<JokeContextType>({
    joke: initialJoke,
    handleUpdateJoke: () => { },
    handleAddVote: () => { },
    handleGetNewJoke: () => { },
});

interface JokeContextProviderProps {
    children: ReactNode;
}

export default function JokeContextProvider({ children }: JokeContextProviderProps) {
    //get new joke, updatejoke, add vote

    const [joke, setJoke] = useState<JokeType>(initialJoke);

    function updateJoke(question: string, answer: string) {
        setJoke(prevJoke => {
            return {
                ...prevJoke,
                question,
                answer
            }
        });
    }

    function addVote(label: AvailableVotes) {
        setJoke(prevJoke => {
            const updatedVotes = [...prevJoke.votes];
            const voteIndex = updatedVotes.findIndex(v => v.label === label);

            if (voteIndex !== -1) {
                updatedVotes[voteIndex] = {
                    ...updatedVotes[voteIndex],
                    value: updatedVotes[voteIndex].value + 1
                };
            } else {
                updatedVotes.push({ label, value: 1 });
            }

            return {
                ...prevJoke,
                votes: updatedVotes
            };
        });
    }

    function getNewJoke(joke: JokeType) {
        setJoke(joke);
    }

    const ctxValue = {
        joke,
        handleUpdateJoke: updateJoke,
        handleAddVote: addVote,
        handleGetNewJoke: getNewJoke
    }

    return <JokeContext.Provider value={ctxValue}>{children}</JokeContext.Provider>
}