import React from 'react';
import { useSelector } from 'react-redux';

const TodoView = () => {
    const {isLoading,error,todo}=useSelector((state)=>(state.todo))
    return (
        <div>
            <h2>Todo List by React Redux Toolkit</h2>
            <div>
                {
                    isLoading &&<h4> Loading ........ </h4>
                }
                {
                    error && <h4>{error.message}</h4>
                }
                {

                }
            </div>
        </div>
    );
};

export default TodoView;