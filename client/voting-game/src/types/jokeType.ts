export type JokeType = {
    _id: string,
    question: string,
    answer: string,
    votes: [Vote] | [],
    availableVotes: [avVotes]
}

export type Vote = {
    value: number,
    label: string
}

type avVotes = "😂" | "👍" | "❤️";