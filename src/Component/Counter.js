import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, removeCount, resetCount } from './Action/Action';
import { todoAction } from './Action/TodoAction';

const Counter = () => {
   

  

    return (
        <div>
            <h2> React Redux Counter App</h2>
            <div>
                <h4>Count : {count}</h4>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleRemove}>Remove</button>

            </div>

           <div>
            {
                isLoading && <h4> Loading ... : 'Not Found'</h4>
            }
            {
                error && <h4> {error.message} : 'Null'</h4>
            }

            <section>
                {
                    todo && todo.map(list=>{return <article key={list.id}>
                        <h5>{list.title}</h5>
                        <h5>{list.userId}</h5>
                    </article>})
                        
                }
            </section>
           </div>

        </div>
    );
};

export default Counter;