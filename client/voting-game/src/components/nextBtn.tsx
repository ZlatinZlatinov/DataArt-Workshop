export default function NextBtn({ getNextJoke }: { getNextJoke: () =>{}}) {

    return <button 
    className="w-full max-2-2xl py-3 px-4 rounded-md bg-amber-500 text-gray-900 font-medium hover:bg-amber-600 transition-colors duration-200 shadow-md mt-4" 
    onClick={getNextJoke}>NEXT</button>;
}