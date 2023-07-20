import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0);

    const handleAdd=()=>{
        setCount((count)=>count+1);
    }
    const handleRemove=()=>{
        setCount((count)=>count-1);
    }
    const handleReset=()=>{
        setCount((count)=>count=0);
    }

    return (
        <div>
            <h2>React Counter App</h2>
            <h3>Count : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;