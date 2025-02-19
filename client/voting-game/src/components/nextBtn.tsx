export default function NextBtn({ getNextJoke }: { getNextJoke: () =>{}}) {

    return <button className="border-1 border-white min-w-2xl py-1 rounded-md hover:bg-gray-500 mt-1" onClick={getNextJoke}>NEXT</button>;
}