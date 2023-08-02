import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, removeCount, resetCount } from './Action/Action';
import { todoAction } from './Action/TodoAction';

const Counter = () => {
   

const {isLoading,error,todo,count}=useSelector(state=>state)
console.log(todo)
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(todoAction())
  },[])


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
                isLoading && <h4>...Loading:</h4>
            }
            {
                error && <h4>{error.message} :'Not Found' </h4> 
            }
            <section>
                {
                    todo && todo.map((list)=>{
                        return <article key={list.id}>

                            <h4>Title: {list.title}</h4>
                            <h4>Id: {list.id}</h4>
                        </article>
                    })
                }
            </section>


        </div>
    );
};

export default Counter;