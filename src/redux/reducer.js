const initialState = {
    todos: [ "first todo","second todo"]
}

 const  myReducer = (state = initialState, action) => {
    console.log(action.todo)
    switch(action.type){
        case "ADD_TODO":
            return{...state,todos: [...state.todos,action.todo]}
         default:
            return state;
    }
}
export default myReducer;