import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJokeById, updateJoke } from "../../services/jokeService";
import { inputValues } from "../../types/jokeType";
import InputElement from "./inputElement";

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
            <InputElement label={'Question'} name="question" onChangeHandler={inputHandler} value={inputValues.question} />

            <InputElement label={"Answer"} name="answer" onChangeHandler={inputHandler} value={inputValues.answer} />

            <button
                className="border border-amber-500 bg-amber-500 text-gray-900 font-medium w-full py-2 rounded-md hover:bg-amber-600 mt-2 transition-colors duration-200"
                type="submit">Update</button>
        </form>
    </div>);
} 