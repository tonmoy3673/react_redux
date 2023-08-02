import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, removeCount, resetCount } from './Action/Action';


const Counter = () => {
   

const {isLoading,error,todo,count}=useSelector(state=>state)
console.log(count)
  const dispatch=useDispatch();



  const handleAdd=()=>{
   dispatch(addCount());
  };
  const handleReset=()=>{
    dispatch(resetCount());
   };
   const handleRemove=()=>{
    dispatch(removeCount());
   };

    return (
        <div>
            <h2> React Redux Counter App</h2>
            <h3> Count: {count}</h3>
            <div>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleRemove}>Remove</button>
            </div>

            <h2>React Redux Todo  List</h2>
            {
                isLoading && <h4>...Loading: 'Not Found'</h4>
            }
        
        </div>
    );
};

export default Counter;