import { CREATE_TODO, MARK_TODO, REMOVE_TODO } from './actions'
import { ITodo, TodoState, ITodoAction } from './types.d';
import { Todo } from '../common/Todo';

const initialState: TodoState = {
    todos: []
}

export const todosData = (state = initialState, action: ITodoAction) => {
    const { type, payload } = action;
    
    if (type === CREATE_TODO) {
        const { text } = payload;
        let todos = [...state.todos];
        const newTodo = new Todo(text);
        todos = todos.concat(newTodo);
        return {
            ...state,
            todos
        };
    } else if (type === REMOVE_TODO) {
        const { id } = payload;
        let todos = [...state.todos];
        todos = todos.filter((todo: ITodo) => todo.id !== id)
        return {
            ...state,
            todos
        };
    } else if (type === MARK_TODO) {
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
    }

    return state;
}