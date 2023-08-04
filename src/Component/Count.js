import React from 'react';
import { useSelector } from 'react-redux';

const Count = () => {

    const {count}=useSelector((state)=>(state.counter));
    return (
        <div>
            <h2>React Redux Toolkit Counter App</h2>
            <h3>Count : {count}</h3>
        </div>
    );
};

export default Count;