export type Joke = {
    question: string,
    answer: string,
    votes: [Vote] | [],
    availableVotes: [avVotes]
}

type Vote = {
    value: number,
    label: string
}

type avVotes = "😂" | "👍" | "❤️";