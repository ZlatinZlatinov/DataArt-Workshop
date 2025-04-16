import { createContext } from "react";

export const JokeContext = createContext({
    id: '',
    question: '',
    answer: '',
    votes: [],
    availableVotes: []
})