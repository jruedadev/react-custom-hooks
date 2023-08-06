import { useEffect, useReducer } from "react";

import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatchTodoAction] = useReducer(todoReducer, [], init);
    
    const pendingTodosCount = todos.filter(item => !item.done).length;
    const todosCount = todos.length;
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const duplicated = todos.filter(item => item.description === todo.description).length >= 1;
        if (!duplicated) {
            const action = {
                type: 'AddToDo',
                payload: todo
            }

            dispatchTodoAction(action);
        }
    };

    const handleRemoveTodo = (id) => {
        dispatchTodoAction({ type: 'RemoveToDo', payload: id });
    }

    const handleToggleTodo = (id) => {
        dispatchTodoAction({ type: 'MarkAsCompleteTodo', payload: id });
    }

    return {
        // Properties
        todos,
        pendingTodosCount,
        todosCount,
        // Methods
        handleNewTodo,
        handleToggleTodo,
        handleRemoveTodo
    }
}
