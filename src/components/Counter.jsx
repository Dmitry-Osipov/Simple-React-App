import React, {useState} from 'react';

const Counter = function () {  // Создание функционального компонента с хуками является рекомендуемым подходом
    const [count, setCount] = useState(0);  // Все хуки начинаются с "use"

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
