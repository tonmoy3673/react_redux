import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CounterSlice from './CounterSlice';
import {add} from './CounterSlice'


const Counter = () => {
const {count}=useSelector((state)=>(state.count));
const dispatch=useDispatch();

console.log(count)
    return (
        <div className='py-2'>
            <section>
                <h2 className='text-xl py-4 font-semibold'>React Redux Counter App</h2>
                <div>
                    <h3 className='text-lg'>Count : <span className='font-semibold'>{count} </span></h3>
                    <div className='py-5'>
                    <button type="button" class="text-white bg-purple-700 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 me-4" onClick={()=>dispatch(add())}>addCount</button>
                    <button type="button" class="text-white bg-purple-700 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 me-4">resetCount</button>
                    <button type="button" class="text-white bg-purple-700 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 ">removeCount</button>

                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default Counter;