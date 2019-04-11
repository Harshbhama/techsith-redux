const initialState = {
    b:1
}
const reducerB = (state = initialState, action) => {
    
    if(action.type === "Update_B"){
        return{
            ...state,
            b: action.A + state.b
        }
    }

    return state
}

export default reducerB