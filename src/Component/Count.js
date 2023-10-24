

import React from 'react';

const Count = () => {
    return (
        
        <div className='py-2'>
        <section>
            <h2 className='text-xl py-4 font-semibold'>React Redux Counter App part 2</h2>
            <div>
                <h3 className='text-lg'>Count : <span className='font-semibold'> 0 </span></h3>
                <div className='py-5'>
                <button type="button" className="text-white bg-green-700 font-medium rounded-md text-sm px-5 py-2.5 text-center mb-2 me-4">ADD</button>
                

                </div>
                
            </div>
        </section>
    </div>
       
    );
};

export default Count;