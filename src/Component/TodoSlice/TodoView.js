import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from './TodoSlice';

const TodoView = () => {
    const {isLoading,error,todo}=useSelector((state)=>(state.todo));
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchTodo())
    },[null])
    return (
        <div>
            <h2>Todo Lists</h2>
            <section>
                {
                    isLoading && <h4>Loading ........ </h4>
                }
                {
                    error && <h4>{error.message}</h4>
                }
            </section>

        </div>
    );
};

export default TodoView;