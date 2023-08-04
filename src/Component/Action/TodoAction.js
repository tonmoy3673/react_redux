import axios from "axios";



const TodoAction = ()=>async(dispatch) => {
    dispatch({type:'RES'});
    try {
        const res=await axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.data)
        dispatch({type:'SHOW',payload:res.data})
    } catch (error) {
        dispatch({type:'FAIL', payload:error.message})
    }
};

export default TodoAction;