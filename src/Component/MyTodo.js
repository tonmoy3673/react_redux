import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoAction from './Action/TodoAction';

const MyTodo = () => {
    
    const {isLoading,todo,error}=useSelector((state)=>state);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(TodoAction())
    },[ ])
    return (
        <div>
            <h2>My Todo List</h2>
            <div>
                {
                    isLoading && <h4>..... Loading </h4>
                }
                {
                    error && <h4>{error.message}</h4>
                }
                <section>
                    {
                        todo && todo.map((list)=>{
                            return <article key={list.id}>
                                <h5>Title : {list.title}</h5>
                            </article>
                        })
                    }
                </section>
            </div>
        </div>
    );
};

export default MyTodo;