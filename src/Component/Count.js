

import React, { useReducer } from 'react';

const Count = () => {

    const initialState={
        count:0
    };
    const reducer=(state,action)=>{
        switch (action.type) {
            case 'ADD':
                return{count:state.count+1};
                case 'RESET':
                    return{count:0}
             
        
            default:
                return state;
        }
    }
    const [state,dispatch]=useReducer(reducer,initialState);
    return (
        
        <div className='py-2'>
        <section>
            <h2 className='text-xl py-4 font-semibold'>React Redux Counter App part 2</h2>
            <div>
                <h3 className='text-lg'>Count : <span className='font-semibold'> {state.count} </span></h3>
                <div className='py-5'>
                <button type="button" className="text-white bg-green-700 font-medium rounded-md text-sm px-5 py-2.5 text-center mb-2 me-4" onClick={()=>dispatch({type:'ADD'})}>ADD</button>
                

                </div>
                
            </div>
        </section>
    </div>
       
    );
};

export default Count;