import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, REMOVE, RESET } from './CounterSlice';

const Counter = () => {
    const {count}=useSelector((state)=>(state.count));
   
    const dispatch=useDispatch();
    

    return (
        <div>
            <h2>React Redux Counter </h2>
            <h3>Count = {count}</h3>
            <section>
                <button onClick={()=>dispatch(ADD())}>Add</button>
                <button onClick={()=>dispatch(RESET())}>Reset</button>
                <button onClick={()=>dispatch(REMOVE())}>Remove</button>
            </section>
        </div>
    );
};

export default Counter;