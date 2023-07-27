
const initialState={
    count:0,
    isLoading:false,
    todo:[],
    error:null,
}

const Reducer = (state=initialState,action) => {
   
    switch (action.type) {
        case "ADD":
            return{
                count:state.count+1
            }
            case "RESET":
                return{
                    count:0
                }
                case "REMOVE":
                    return{
                        count:state.count-1
                    }


                    case "RESPONSE":
                        return{
                            ...state,
                            isLoading:true,
                            todo:[]
                            
                        };
                        case "SHOW":
                        return{
                            ...state,
                            isLoading:false,
                            todo:action.payload
                            
                        };
                        case "FAIL":
                            return{
                                ...state,
                                isLoading:false,
                                error:action.payload
                                
                            }; 
                               
    
        default:
           return state;
    }

};

export default Reducer;

