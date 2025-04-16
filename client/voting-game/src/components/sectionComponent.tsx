import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { getRandomJoke } from '../services/jokeService';
import { JokeType } from '../types/jokeType';
import Joke from './Joke/joke';
import NextBtn from './nextBtn';
import UpdateComponent from './updateComponent';

export default function SectionComponent() {
    const [joke, setJoke] = useState<JokeType>();

    async function getNextJoke() {
        const data = await getRandomJoke();
        setJoke(data);
    }

    useEffect(() => {
        try {
            getNextJoke();
        } catch (err) {
            alert(err);
        }
    }, []);

    return (<section className="flex flex-col gap-4 justify-center items-center w-full h-dvh bg-gray-800 px-4">
        <Routes>
            <Route path={'/joke'} element={<Joke joke={joke} />} />
            <Route path={'/update/:jokeId'} element={<UpdateComponent/>} />
        </Routes>
        <NextBtn getNextJoke={getNextJoke} />
    </section>);
}