
const initialState={
    count:0,
}

const Reducer = (state=initialState,action) => {
    switch (action.type) {
        case 'ADD':
            return{
                count:state.count+1,
            }
    
        default:
            return state;
    }
};

export default Reducer;
