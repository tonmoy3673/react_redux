
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PostView = () => {

    const {isLoading,error,posts}=useSelector(state=>(state.posts))
    const dispatch=useDispatch();
    return (
        <div>
            <h2>All Posts with Redux</h2>
            <div>
            {
                isLoading && <h4>.... Loading </h4>
            }
            {
                error && <h4>{error.message}</h4>
            }
            <section>
                {
                    posts && posts.map((list)=><article key={list.id}>
                        return <h4>
                           
                            Title:{list.title}
                        </h4>
                        <h4>
                           
                            All Posts:{list.body}
                        </h4>
                    </article>)
                }
            </section>

            </div>
        </div>
    );
};

export default PostView;