import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './CounterSlice';

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
                </div>
            </section>
        </div>
    );
};

export default Counter;