import { useState } from "react"

export const useCounter = (value = 10) => {

    const [counter, setCounter] = useState(value);

    const increment = (value = 1) => setCounter(counter + value);
    const decrement = (value = 1) => { if (counter === 0) return; setCounter(counter - value) };
    const reset = () => setCounter(value);

    return { counter, increment, decrement, reset }
}