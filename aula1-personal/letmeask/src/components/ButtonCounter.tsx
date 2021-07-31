import { useState } from "react";

export function ButtonCounter () {

    // let it change
    // let counter = 0;
    const [counter, setCounter] = useState(0);

    function increment () {
        // counter += 1;
        // console.log(counter);
        setCounter(counter + 1);
    };


    return (
        // No React sempre camelCase nas props. Diferente do HTML.
        <button onClick={increment}>
            {counter}
        </button>
    );
};