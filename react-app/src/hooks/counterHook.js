import {useState} from 'react';

const CounterHook = (startingVal = 0) => {
    const [counter, setCounter] = useState(startingVal);

    const handleAdd = (val) => {
        return() => setCounter(counter+val);
    }

    const handleSub = (val) => {
        return() => setCounter(counter-val);
    }

    return {
        value: counter,
        handleAdd: handleAdd,
        handleSub: handleSub
    }
}

export default CounterHook;