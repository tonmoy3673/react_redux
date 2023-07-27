import axios from "axios";

export const todoAction=async(dispatch)=>{
    dispatch({type:'RESPONSE'});
    try {
        const res= await axios.get('https://jsonplaceholder.typicode.com/todos')
        dispatch({type:'SHOW', payload:res.data})
    } catch (error) {
        dispatch({type:'FAIL',payload:error.message})
    }

};


