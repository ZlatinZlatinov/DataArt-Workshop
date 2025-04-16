export default function InputElement({
    label, name, onChangeHandler, value
}: {
    label: string,
    name: string
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string | undefined
}) {
    const inputClassName = "w-full bg-gray-700 p-2 rounded-md border border-gray-600 focus:border-amber-400 focus:outline-none text-white";

    return (
        <div className="w-full">
            <label htmlFor={name} className="block text-gray-300 mb-1">{label}</label>

            <input
                className={inputClassName}
                type="text" id={name} name={name}
                value={value}
                onChange={onChangeHandler} />
        </div>
    );
}