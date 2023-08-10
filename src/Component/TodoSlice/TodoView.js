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
                <section>
                    {
                        todo && todo.map((list)=>
                        
                        {
                            return <article>
                                    <h4>User ID : {list.userId}</h4>
                                    <h4>User ID : {list.title}</h4>
                            </article>
                        })
                    }
                </section>
            </div>
        </div>
    );
};

export default TodoView;