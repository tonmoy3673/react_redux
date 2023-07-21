import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0);
    const handleAdd=()=>{
      setCount((count+1))
    }
    const handleReset=()=>{
      setCount(0)
    }
    const handleRemove=()=>{
        setCount(count-1)
      }
    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default Counter;