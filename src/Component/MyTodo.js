// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { todoAction } from './Action/TodoAction';

// const MyTodo = () => {
//     const {error,todo,isLoading}=useSelector(state=>state);
//     const dispatch=useDispatch()
//     useEffect(()=>{
//         dispatch(todoAction())
//     },[])
//     return (
//         <div>
//             <h2>Todo List</h2>
//             {
//                 isLoading && <h4>Loading :'Not Found'</h4>
//             }

//             {
//                 error && <h4> {error.message} </h4>
//             }
//             <section>
//                {
//                 todo && todo.map(list=>
//                     {
//                         return <article>
//                                 <h5>{list.title}</h5>
//                         </article>
//                     }
//                     )
//                }
//             </section>


//         </div>
//     );
// };

// export default MyTodo;