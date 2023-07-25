import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, removeCount, resetCount } from './Action/Action';
import { todoAllAction } from './Action/TodoAction';



const Counter = () => {
  const count=useSelector(state=>state.count);
  
    
  const {isLoading,error,todo}=useSelector(state=>state);
    
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(todoAllAction())
  },[])
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
            <h1>Todo List</h1>
            {
                isLoading &&  <h3>Loading :'Not Found' </h3> 
            }
            {
                error && <h3>{error.message}:'Not Found'</h3>
            }
            <section>
                {
                    todo.map(list=>{
                        return <article key={list.id}>
                        <h5>{list.title}</h5>
                    </article>
                    })
                }
            </section>
        </div>
    );
};

export default Counter;