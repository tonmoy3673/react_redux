import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CommentView = () => {
    const {isLoading,comment,error}=useSelector((state)=>(state.comment));
    const dispatch=useDispatch();
    

    return (
        <div>
            <h3>All Comments List</h3>
            <section>

            </section>
        </div>
    );
};

export default CommentView;