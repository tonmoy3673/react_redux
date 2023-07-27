import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, REMOVE, RESET } from './CounterSlice';



const Count = () => {
    const count=useSelector(state=>state.count.count);
    const dispatch=useDispatch()
    
    return (
        <div>
            <h1>Count App with ToolKit</h1>
            <div>
                <h3>Count : {count}</h3>
                <button onClick={()=>dispatch(ADD())}>ADD</button>
                <button onClick={()=>dispatch(RESET())}>RESET</button>
                <button onClick={()=>dispatch(REMOVE())}>REMOVE</button>
            </div>
        </div>
    );
};

export default Count;