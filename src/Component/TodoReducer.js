
const initialState={
    isLoading:false,
    todo:[],
    error:null,
}

 export const TodoReducer = (state=initialState,action) => {

    switch (action.type) {
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
                };
           
        default:
            return state;
    }

};

export default TodoReducer;