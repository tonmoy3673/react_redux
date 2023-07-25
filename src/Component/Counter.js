import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, removeCount, resetCount } from './Action/Action';



const Counter = () => {
  const count=useSelector(state=>state.count);
  const dispatch=useDispatch();
  const handleAdd=()=>{
    dispatch(addCount())
  }
  const handleReset=()=>{
    dispatch(resetCount())
  }
  const handleRemove=()=>{
    dispatch(removeCount());
  }
    return (
        <div>
            <h1>React Counter App by Redux</h1>
            <h3>Count : {count}</h3>
            <div>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div>
    );
};

export default Counter;