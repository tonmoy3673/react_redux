import React from 'react';
import { useSelector } from 'react-redux';

const Count = () => {

    const {count}=useSelector(state=>state.counter)
    console.log(count)
    return (
        <div>
            <h2>React Redux Toolkit Counter App</h2>
            <h4>Count : {count}</h4>
        </div>
    );
};

export default Count;