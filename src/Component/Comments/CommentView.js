import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComment } from './CommentSlice';


const CommentView = () => {

    const {isLoading,error,comments}=useSelector((state)=>(state.comments));
  
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchComment())
    },[])
    return (
        <div>
            <h3>All Comments</h3>
            {
                isLoading && <h4>Loading ..... </h4>
            }
            {
                error && <h4>${error.message}</h4>
            }
            <section>
                {
                comments.length >6 && comments.slice(1,6).map((list)=>
                <article key={list.id}>
                    <h4>Name : {list.name}</h4>
                    <h4>Email : {list.email}</h4>
                <h4>Comments : {list.body? list.body :'Not Found'}</h4>
                </article>)
                }
            </section>
        </div>
    );
};

export default CommentView;