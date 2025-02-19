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
        <form className="flex flex-col gap-2.5 text-lg items-center" onSubmit={onSubmitJoke}>
            <div className="w-full">
                <label htmlFor="question">Question</label>
                <input className="w-full bg-gray-500 p-0.5" type="text" id="question" name="question" value={inputValues.question} onChange={inputHandler} />
            </div>

            <div className="w-full">
                <label htmlFor="answer">Answer</label>
                <input className="w-full bg-gray-500 p-0.5" type="text" id="answer" name="answer" value={inputValues.answer} onChange={inputHandler} />
            </div>

            <button className="border-1 border-white w-1/2 py-1 rounded-md hover:bg-gray-500 mt-1" type="submit" >Update</button>
        </form>
    </div>);
} 