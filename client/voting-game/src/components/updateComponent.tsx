import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJokeById, updateJoke } from "../services/jokeService";
import { inputValues } from "../types/jokeType";

export default function UpdateComponent() {
    const { jokeId } = useParams();
    const [inputValues, setInputValues] = useState<inputValues>({ question: "", answer: "" });

    function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const name = e.target!.name;
        const value = e.target!.value;

        setInputValues((state: inputValues) => {
            return {
                ...state,
                [name]: value
            };
        });
    }

    async function getJoke() {
        const data = await getJokeById(jokeId);
        setInputValues({ question: data.question, answer: data.answer });
    }

    useEffect(() => {
        try {
            getJoke();
        } catch (err) {
            alert(err);
        }
    }, []);

    async function onSubmitJoke(e: React.FormEvent) {
        e.preventDefault();

        try {
            const result = await updateJoke(jokeId, inputValues);
            setInputValues({
                question: result!.question,
                answer: result!.answer
            });

        } catch (err) {
            alert(err);
        }
    }

    return (<div className="p-4 min-w-2xl bg-gray-900 rounded-xl border-1 border-gray-900">
        <form className="flex flex-col gap-1.5 text-lg" onSubmit={onSubmitJoke}>
            <div>
                <label htmlFor="question">Question</label>
                <input className="w-full bg-gray-500 p-0.5" type="text" id="question" name="question" value={inputValues.question} onChange={inputHandler} />
            </div>

            <div>
                <label htmlFor="answer">Answer</label>
                <input className="w-full bg-gray-500 p-0.5" type="text" id="answer" name="answer" value={inputValues.answer} onChange={inputHandler} />
            </div>

            <button type="submit" >Update</button>
        </form>
    </div>);
} 