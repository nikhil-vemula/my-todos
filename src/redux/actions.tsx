export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = (text: String) => ({
  type: CREATE_TODO,
  payload: { text },
});


export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (text: String) => ({
    type: REMOVE_TODO,
    payload: { text },
});