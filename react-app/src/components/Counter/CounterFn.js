import React, { useEffect, useRef } from 'react';
import CounterHook from '../../hooks/counterHook';


const CounterFn = () => {
    const counter = CounterHook(0);
    const counterRef = useRef(counter.value);
    counterRef.current = counter.value;

    const handleAlert = () => {
        setTimeout(() => {
            alert(counterRef.current)
        }, 5000)
    }

return (
    <section>
      <header>CounterFn: {counter.value}</header>
      <button onClick={counter.handleAdd(1)}>+</button>
      <button onClick={counter.handleSub(1)}>-</button>
      <button onClick={handleAlert}>Alert after 5 s</button>
    </section>
  );
}

export default CounterFn;
