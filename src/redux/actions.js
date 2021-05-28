export const TODO_CREATED = "TODO_CREATED";
export const todoCreated = (newTodo) => ({
  type: TODO_CREATED,
  payload: { newTodo },
});

export const TODO_REMOVED = "TODO_REMOVED";
export const todoRemoved = (id) => ({
  type: TODO_REMOVED,
  payload: { id },
});

export const TODO_MARKED = "TODO_MARKED";
export const todoMarked = (id, isComplete) => ({
  type: TODO_MARKED,
  payload: { id, isComplete },
});

export const FETCHING_TODOS = "FETCHING_TODOS";
export const fetchingTodos = () => ({
  type: FETCHING_TODOS,
});

export const TODOS_FETCHED = "TODOS_FETCHED";
export const todosFetched = (todos) => ({
  type: TODOS_FETCHED,
  payload: { todos },
});
