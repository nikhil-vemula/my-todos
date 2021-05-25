import { ITodo } from './types.d';

export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = (todo: ITodo) => ({
  type: CREATE_TODO,
  payload: todo,
});


export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (id: string) => ({
    type: REMOVE_TODO,
    payload: { id },
});

export const MARK_TODO = 'MARK_TODO';
export const markTodo = (id: string, isComplete: boolean) => ({
    type: MARK_TODO,
    payload: { id, isComplete},
});