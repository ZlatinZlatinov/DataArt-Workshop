export default function Joke() {
    return (<div className="p-4 min-w-2xl bg-gray-900 rounded-xl">
        <div className="flex justify-center items-start px-4 flex-col gap-1 min-h-28 bg-amber-400 rounded-xl">
            <p className="text-red-800 text-2xl">Q: Am I joke to you?</p>
            <p className="text-red-800 text-2xl">A: Yes!</p>
        </div>

        <div className="flex mt-2 justify-between">
            <ul className="flex text-2xl gap-2.5">
                <li><button className="hover:bg-gray-500 p-0.5">😂</button><span className="text-xs text-white">122</span></li>
                <li><button className="hover:bg-gray-500 p-0.5">👍</button><span className="text-xs text-white">53</span></li>
                <li><button className="hover:bg-gray-500 p-0.5">❤️</button><span className="text-xs text-white">8</span></li>
            </ul>

            <div>
                <button className="border-1 border-white rounded-lg text-lg p-1 mr-2 text-white hover:bg-gray-500">Update</button>
                <button className="border-1 border-white rounded-lg text-lg p-1 mr-2 text-red-600 hover:bg-gray-500">Delete</button>
            </div>
        </div>

    </div>);
}