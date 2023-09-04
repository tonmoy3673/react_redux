import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, ADD10, REMOVE, RESET } from './CounterSlice';

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
                <button onClick={()=>dispatch(ADD10(10))}>AddValue</button>
            </section>
        </div>
    );
};

export default Counter;