import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, add10, remove, reset } from './CounterSlice';

const Counter = () => {

    const {count}=useSelector(state=>(state.count))
    const dispatch=useDispatch();

    return (
        <div>
            <h2>React Redux Counter App</h2>
            <div>
                <h3>Count : {count}</h3>
                <div>
                    <button onClick={()=>dispatch(add())}>ADD</button>
                    <button onClick={()=>dispatch(reset())}>RESET</button>
                    <button onClick={()=>dispatch(remove())}>REMOVE</button>
                    <button onClick={()=>dispatch(add10(10))}>ADD10</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Counter;