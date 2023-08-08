import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './PostSlice';

const PostView = () => {
    const {isLoading,post,error}=useSelector(state=>(state.post));
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchPost())
    },[])
    return (
        <div>
            <h2>React Redux Toolkit Posts View</h2>
            <div>
            {
                isLoading && <h3>...Loading</h3>
            }
            {
                error && <h3>{error.message}</h3>
            }
            <section>
                {
                    post && post.map((list)=>
                    <article key={list.id}>
                        <h4>Title : {list.title}</h4>
                        <h4>Description : {list.body}</h4>
                    </article>
                    )
                }
            </section>
            </div>
        </div>
    );
};

export default PostView;