/* 
-count
-handleIncrement
-handleDecrement
-handleReset
*/

import React from 'react';

export default function Counter({
    count,
    handleIncrement,
    handleDecrement,
    handleReset
}) {
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleDecrement}><h1>-</h1></button>
            <button onClick={handleIncrement}><h1>+</h1></button>
            <button onClick={handleReset}><h1>♻</h1></button>
        </div>
    )
}

