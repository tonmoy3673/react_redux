import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, ADD5, REMOVE, RESET } from './CounterSlice';

const Count = () => {

    const {count}=useSelector((state)=>(state.counter));
    const dispatch=useDispatch()
    return (
        <div>
            <h2>React Redux Toolkit Counter App</h2>
            <h3>Count : {count}</h3>

            <button onClick={()=>dispatch(ADD())}>ADD</button>
            <button onClick={()=>dispatch(RESET())}>RESET</button>
            <button onClick={()=>dispatch(REMOVE())}>REMOVE</button>
            <button onClick={()=>dispatch(ADD5(5))}>ADD 5</button>
        </div>
    );
};

export default Count;