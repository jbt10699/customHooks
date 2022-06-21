import React from 'react';
import CounterHook from '../../hooks/counterHook';

const BuyStockFn = () => {
    const stockCounter = CounterHook(10000)

    return <section>
        <h1>How many stocks do you want to buy</h1>
        <button onClick={stockCounter.handleAdd(10)}>+10</button>
        <span>{stockCounter.value}</span>
        <button onClick={stockCounter.handleSub(10)}>-10</button>
    </section>
}

export default BuyStockFn;