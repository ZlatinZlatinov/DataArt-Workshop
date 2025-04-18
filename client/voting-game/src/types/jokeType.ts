export type AvailableVotes = "😂" | "👍" | "❤️";

export type Vote = {
    value: number,
    label: AvailableVotes
}

export type JokeType = {
    _id: string,
    question: string,
    answer: string,
    votes: Vote[] | []
}

export type inputValues = {
    question: string | "" | undefined,
    answer: string | "" | undefined
}
