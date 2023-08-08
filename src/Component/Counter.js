import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {

    const {count}=useSelector(state=>(state.count))
    
    return (
        <div>
            <h2>React Redux Counter App</h2>
            <div>
                <h3>Count : {count}</h3>
            </div>
        </div>
    );
};

export default Counter;