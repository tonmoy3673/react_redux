import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0);
    const handleAdd=()=>{
        setCount((count)=>count+1)
    }
    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count : {count}</h3>
            <button onClick={handleAdd}>Add</button>

        </div>
    );
};

export default Counter;