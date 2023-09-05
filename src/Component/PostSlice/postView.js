import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './PostSlice';

const PostView = () => {
    const {isLoading,error,post}=useSelector((state)=>(state.post));

    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(fetchPost())  
    },[null])

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
                <article>
                    {
                       post.length>10 && post.slice(0,10).map((list)=>{
                        return <section key={list.id}>
                            <h4>Title :{list.id} {list.title} </h4>
                            <h5>Info : {list.body}</h5>
                        </section>
                       })
                    }

                </article>
            </section>
        </div>
    );
};

export default PostView;