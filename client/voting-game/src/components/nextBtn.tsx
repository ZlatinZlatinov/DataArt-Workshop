import { useNavigate } from "react-router-dom";

export default function NextBtn() {
    const navigate = useNavigate();

    function getNextJoke(): void {
        navigate('/joke');
    }

    return <button onClick={getNextJoke}>Netx</button>;
}