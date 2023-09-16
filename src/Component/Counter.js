import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, reset } from './CounterSlice';

const Counter = () => {
    const {count}=useSelector((state)=>(state.count));
    const dispatch=useDispatch();
    return (
        <div>
            <section>
                <h2>React Redux Counter App</h2>
                <div>
                    <h3>Count : {count} </h3>
                    <button onClick={()=>dispatch(add())}>Add</button>
                    <button onClick={()=>dispatch(reset())}>Reset</button>
                    <button onClick={()=>dispatch(remove())}>Reset</button>
                </div>
            </section>
        </div>
    );
};

export default Counter;