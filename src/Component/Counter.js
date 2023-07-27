import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, removeCount, resetCount } from './Action/Action';

const Counter = () => {
    const count=useSelector(state=>state.count);
    const dispatch=useDispatch();
    const handleAdd=()=>{
        dispatch(addCount())
    };
    const handleReset=()=>{
        dispatch(resetCount())
    };

    const handleRemove=()=>{
        dispatch(removeCount())
    };

    return (
        <div>
            <h2> React Redux Counter App</h2>
            <div>
                <h4>Count : {count}</h4>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleRemove}>Remove</button>

            </div>
        </div>
    );
};

export default Counter;