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

            }
            </section>
        </div>
    );
};

export default CommentView;