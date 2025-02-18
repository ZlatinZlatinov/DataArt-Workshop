import { Route, Routes } from "react-router-dom"
import Joke from "./components/joke"
import NextBtn from "./components/nextBtn"

function App() {

  return (
    <section className="flex flex-col gap-2.5 justify-center items-center w-full h-dvh bg-gray-800">
      <Routes>
        <Route path={'/joke'} element={<Joke />} />
      </Routes> 
      <NextBtn/>
    </section>
  )
}

export default App
