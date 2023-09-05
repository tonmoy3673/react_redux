import React from 'react';
import { useSelector } from 'react-redux';

const PostView = () => {
    const {isLoading,error,post}=useSelector((state)=>(state.post));


    return (
        <div>
            <h2>All Posts</h2>
            <section>
                {
                    isLoading && <h4>... Loading </h4>
                }

                {
                    error && <h4>{error.message}</h4>
                }
            </section>
        </div>
    );
};

export default PostView;