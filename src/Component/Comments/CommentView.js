import React from 'react';
import { useSelector } from 'react-redux';

const CommentView = () => {

    const {isLoading,error,comments}=useSelector((state)=>state)

    return (
        <div>
            <h3>All Comments</h3>
            {
                isLoading && <h4>Loading ..... </h4>
            }
            {
                error && <h4>${error.message}</h4>
            }
        </div>
    );
};

export default CommentView;