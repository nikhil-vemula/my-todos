import { CREATE_TODO, REMOVE_TODO } from './actions'
import { ITodo, TodoAction, TodoState } from './types.d';
const initialState: TodoState = {
    todos: []
}
export const todos = (state = initialState, action: TodoAction) => {
    const { type, payload } = action;
    var newState = Object.assign({}, state);

    if (type === CREATE_TODO) {
        const { text } = payload;
        const newTodo = {
            text: text
        }
        newState.todos = state.todos.concat(newTodo);
        return newState;
    } else if (type === REMOVE_TODO) {
        const { text } = payload;
        newState.todos = state.todos.filter((todo: ITodo) => todo.text !== text)
        return newState;
    }
    return state;
}