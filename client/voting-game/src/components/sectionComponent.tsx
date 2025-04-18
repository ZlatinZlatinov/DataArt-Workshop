import { Route, Routes } from "react-router-dom";
import Joke from './Joke/joke';
import NextBtn from './nextBtn';
import UpdateComponent from './UpdateJoke/updateComponent';
import JokeContextProvider from '../contexts/jokeContext';

export default function SectionComponent() {
    return (<JokeContextProvider>
        <section className="flex flex-col gap-4 justify-center items-center w-full h-dvh bg-gray-800 px-4">
            <Routes>
                <Route path={'/joke'} element={<Joke />} />
                <Route path={'/update/:jokeId'} element={<UpdateComponent />} />
            </Routes>
            <NextBtn />
        </section>
    </JokeContextProvider>);
}