import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJokeById, updateJoke } from "../../services/jokeService";
import { inputValues } from "../../types/jokeType";

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

    return (<div className="p-6 w-full max-w-2xl bg-gray-900 rounded-xl shadow-lg border border-gray-700">
        <form className="flex flex-col gap-4 text-lg" onSubmit={onSubmitJoke}>
            <div className="w-full">
                <label htmlFor="question" className="block text-gray-300 mb-1">Question</label>

                <input
                    className="w-full bg-gray-700 p-2 rounded-md border border-gray-600 focus:border-amber-400 focus:outline-none text-white"
                    type="text" id="question" name="question"
                    value={inputValues.question}
                    onChange={inputHandler} />
            </div>

            <div className="w-full">
                <label htmlFor="answer" className="block text-gray-300 mb-1">Answer</label>

                <input
                    className="w-full bg-gray-700 p-2 rounded-md border border-gray-600 focus:border-amber-400 focus:outline-none text-white"
                    type="text" id="answer" name="answer"
                    value={inputValues.answer}
                    onChange={inputHandler} />
            </div>

            <button
                className="border border-amber-500 bg-amber-500 text-gray-900 font-medium w-full py-2 rounded-md hover:bg-amber-600 mt-2 transition-colors duration-200"
                type="submit">Update</button>
        </form>
    </div>);
} 