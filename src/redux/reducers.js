import { TODOS_FETCHED, TODO_CREATED, TODO_MARKED, TODO_REMOVED, FETCHING_TODOS } from './actions'

const initialTodoState = {
    todos: []
}

export const todosData = (state = initialTodoState, action) => {
    const { type, payload } = action;
    
    if (type === TODO_CREATED) {
        const { newTodo } = payload;
        let todos = [...state.todos];
        todos = todos.concat(newTodo);
        return {
            ...state,
            todos
        };
    } else if (type === TODO_REMOVED) {
        const { id } = payload;
        let todos = [...state.todos];
        todos = todos.filter((todo) => todo.id !== id)
        return {
            ...state,
            todos
        };
    } else if (type === TODO_MARKED) {
        const { id, isComplete } = payload;
        let todos = [...state.todos];
        for (let i=0; i < todos.length; i++) {
            if (todos[i].id === id)
                todos[i].isComplete = isComplete;
        }
        return {
            ...state,
            todos
        };
    } else if (type === FETCHING_TODOS) {
    } else if (type === TODOS_FETCHED) {
        const { todos } = payload;
        return {
            ...state,
            todos
        }
    }

    return state;
}