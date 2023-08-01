

export const resTodo=()=>{
    return{
        type:'RES'
    }
}
export const showTodo=(todo)=>{
    return{
        type:'SHOW',
        payload:todo
    }
}
export const failTodo=(error)=>{
    return{
        type:'FAIL',
        payload:error
    }
}





