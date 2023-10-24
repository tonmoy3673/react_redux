import React from 'react';
import { useSelector } from 'react-redux';


const Counter = () => {
const {count}=useSelector((state)=>(state.count))
console.log(count)
    return (
        <div>
            <section>
                <h2>React Redux Counter App</h2>
                <div>
                    <h3>Count : 0 </h3>
                    
                </div>
            </section>
        </div>
    );
};

export default Counter;