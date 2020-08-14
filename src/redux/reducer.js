const initialState = {
    todos: [ {text:"first todo", text:"second todo"}]
}

export const myReducer = (state = initialState, action) => {
    console.log(action.todo)
    switch(action.type){
        case "ADD_TODO":
            return{todos: [...state.todos,action.todo]}
            default:
                return state;
    }
}