export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case 'AddToDo':
            return [...initialState, action.payload];

        case 'RemoveToDo':
            return initialState.filter(todo => todo.id !== action.payload);

        case 'MarkAsCompleteTodo':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, done: !todo.done }
                }
                return todo;
            });

        default:
            return initialState;
    }

}