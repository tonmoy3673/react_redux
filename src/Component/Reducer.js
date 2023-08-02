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



store.dispatch(fetchData())
export default Reducer;