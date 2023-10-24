import React from 'react';
import { useSelector } from 'react-redux';


const Counter = () => {
const {count}=useSelector((state)=>(state.count))
console.log(count)
    return (
        <div>
            <section>
                <h2 className='text-2xl font-semibold'>React Redux Counter App</h2>
                <div>
                    <h3>Count : {count} </h3>
                    <div>
                        <button className=''>AddCount</button>
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default Counter;