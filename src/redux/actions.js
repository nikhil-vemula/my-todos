export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = (todo) => ({
  type: CREATE_TODO,
  payload: todo,
});


export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: { id },
});

export const MARK_TODO = 'MARK_TODO';
export const markTodo = (id, isComplete) => ({
    type: MARK_TODO,
    payload: { id, isComplete},
});