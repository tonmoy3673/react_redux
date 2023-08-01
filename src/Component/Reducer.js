
const initialState={
    count:0,
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
    
        default:
            return state;
    }
};

export default Reducer;
