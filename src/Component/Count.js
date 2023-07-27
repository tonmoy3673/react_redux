import React from 'react';
import { useSelector } from 'react-redux';



const Count = () => {
    const count=useSelector(state=>state.count.count);
    console.log(count)
    return (
        <div>
            <h1>Count App with ToolKit</h1>
            <div>
                <h3>Count : 0</h3>
            </div>
        </div>
    );
};

export default Count;