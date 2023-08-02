

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
                    todo:[],
                    error:null,
                };
                case 'SHOW':
                    return{
                        ...state,
                        isLoading:false,
                        todo:action.payload,
                        error:null,
                    };
                    case 'FAIL':
                        return{
                            ...state,
                            isLoading:false,
                            todo:[],
                            error:action.payload,
                        }
       
    
        default:
            return state;
    }
};




export default Reducer;