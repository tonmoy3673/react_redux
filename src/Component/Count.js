import { useReducer } from 'react';




const Count = () => {
    const initialState={
        count:0
    };
    const reducer=(state,action)=>{
        console.log(state);
        switch (action.type) {
            case "ADD":
                return {count:state.count+1};
                case "REMOVE":
                    return {count:state.count-1};
        
            default:
               return state;
        }
    }
    
    const [state,dispatch]=useReducer(reducer,initialState);
    return (
        <div>
            <h3>Count : {state.count}</h3>
            <div>
                <button onClick={()=>dispatch({type:"ADD"})}>Add</button>
                <button onClick={()=>dispatch({type:'REMOVE'})}>Remove</button>
            </div>
        </div>
    );
};

export default Count;