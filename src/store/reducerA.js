const initialState = {
    a:1
}
const reducerA = (state = initialState, action) => {
    
    if(action.type === "Update_A"){
        return{
            ...state,
            a: state.a + action.B
        }
    }
    return state
}

export default reducerA