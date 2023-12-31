import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComment } from './CommentSlice';

const CommentView = () => {
    const {isLoading,comment,error}=useSelector((state)=>(state.comment));
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchComment())
    },[]);

    return (
        <div>
            <h3>All Comments List</h3>
            <section>
            {
                isLoading && <h4>Loading ..... </h4>
            }
            {
                error && <h4>{error.message}</h4>
            }
            <div>
                {
                    comment && comment.slice(0,6).map((list)=>
                    <article key={list.id}>
                        <h4>Post ID : {list.id}</h4>
                        <h4>Email : {list.email}</h4>
                        <h4>Comments : {list.body}</h4>
                    </article>
                    )
                }
            </div>
            </section>
        </div>
    );
};

export default CommentView;