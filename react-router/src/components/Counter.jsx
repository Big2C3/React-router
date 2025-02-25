
import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue, incrementAmount }) {
    const [counter, setCounter] = useState(initialValue);
    const handleIncrement = () => {
        setCounter(prevCount => prevCount + incrementAmount);
    };
    const handleDecrement = () => {
        setCounter(prevCount => prevCount - incrementAmount);
    };
    const handleReset = () => {
        setCounter(initialValue);
    };

    return (
        <div>
            <CounterDisplay count={counter} />
            <div>
                <button onClick={handleIncrement}>Incremento</button>
                <button onClick={handleDecrement}>Decremento</button>
                <button onClick={handleReset}>Ripristino</button>
            </div>
        </div>
    );
}

