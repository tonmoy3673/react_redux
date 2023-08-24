import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CommentView = () => {

    const {isLoading,error,comments}=useSelector((state)=>state)
    const dispatch=useDispatch();
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
                    comments.map((list)=><article>
                       return 
                            <h4>Name : {list.name}</h4>
                            <h4>Comments : {list.body}</h4>
                        
                    </article>)
                }
            </section>
        </div>
    );
};

export default CommentView;