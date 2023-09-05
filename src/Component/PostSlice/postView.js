import React from 'react';
import { useSelector } from 'react-redux';

const PostView = () => {
    const {isLoading,error,post}=useSelector((state)=>(state.post))
    return (
        <div>
            <h2>All Posts</h2>
        </div>
    );
};

export default PostView;