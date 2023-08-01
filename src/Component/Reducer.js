import axios from "axios";
import { resTodo } from "./Action/TodoAction";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const initialState={
    count:0,
    isLoading:false,
    todo:[],
    error:null,
}

const Reducer = (state=initialState,action) => {
    switch (action.type) {
        case 'ADD':
            return{
                ...state,
                count:state.count+1,
            }
            case 'RESET':
            return{
                ...state,
                count:0,
            }
            case 'REMOVE':
            return{
                ...state,
                count:state.count-1,
            }
            case 'RES':
            return{
                ...state,
                isLoading:true,
            }
            case 'SHOW':
            return{
                ...state,
                isLoading:false,
                todo:action.payload
            }
            case 'FAIL':
            return{
                ...state,
                isLoading:false,
                error:action.payload
            }
    
        default:
            return state;
    }
};

const fetchData=()=>{
    return(dispatch)=>{
        dispatch(resTodo())
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>{
            const myTodo=res.data
          
            const title=myTodo.map(list=>list.title)
            console.log(title)
            dispatch(resTodo(title))
        })
        .catch((error)=>{
            const errorSms=error.message
            dispatch(errorSms)
        })
            
    }

}




 const store=createStore(Reducer,applyMiddleware(thunk));
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(fetchData())
export default Reducer;