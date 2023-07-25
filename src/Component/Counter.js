import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from './Action/Action';



const Counter = () => {
  const count=useSelector(state=>state.count);
  const dispatch=useDispatch();
  const handleAdd=()=>{
    dispatch(addCount())
  }
    return (
        <div>
            <h1>React Counter App by Redux</h1>
            <h3>Count : {count}</h3>
            <div>
                <button onClick={handleAdd}>Add</button>
            </div>
        </div>
    );
};

export default Counter;