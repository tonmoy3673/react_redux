import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from './Action/Action';

const Counter = () => {
    const count=useSelector(state=>state.count);
    const dispatch=useDispatch();
    const handleAdd=()=>{
        dispatch(addCount())
    }
    return (
        <div>
            <h2> React Redux Counter App</h2>
            <div>
                <h4>Count : {count}</h4>
                <button onClick={handleAdd}>Add</button>

            </div>
        </div>
    );
};

export default Counter;