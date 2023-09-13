import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComment } from './CommentSlice';


const CommentView = () => {
    const {isLoading,error,comment}=useSelector((state)=>(state.comment));
    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(fetchComment());
    },[null])
    return (
        <div>
            <section>
                <h3>Show All Comments</h3>

                <div>
                    {
                        isLoading && <h4>Loading ........</h4>
                    }

                    {
                        error && <h4>${error.message}</h4>
                    }
                </div>
            </section>
        </div>
    );
};

export default CommentView;