import { useDispatch, useSelector } from "react-redux";
import { addCount, removeCount } from "./Action/Action";



const Counter = () => {
    
    const count=useSelector(state=>state.count)
    const dispatch=useDispatch()
    const handleAdd=()=>{
       dispatch(addCount())
    }
    const handleRemove=()=>{
        dispatch(removeCount())
    }
    const handleReset=()=>{
        setCount((count)=>count=0);
    }

    return (
        <div>
            <h2>React Counter App</h2>
            <h3>Count : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;