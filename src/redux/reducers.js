import {
  FETCHING_TODOS,
  HIDE_TOAST,
  SHOW_TOAST,
  TODOS_FETCHED,
  TODO_CREATED,
  TODO_UPDATED,
  TODO_REMOVED,
  UPDATE_USER_STATE,
  USER_STATE_FETCHED
} from "./actions";

const initialTodoState = {
  todos: [],
};

export const todosData = (state = initialTodoState, action) => {
  const { type, payload } = action;

  if (type === TODO_CREATED) {
    const { newTodo } = payload;
    let todos = [...state.todos];
    todos = todos.concat(newTodo);
    return {
      ...state,
      todos,
    };
  } else if (type === TODO_REMOVED) {
    const { id } = payload;
    let todos = [...state.todos];
    todos = todos.filter((todo) => todo.id !== id);
    return {
      ...state,
      todos,
    };
  } else if (type === TODO_UPDATED) {
    const updateObject = payload.updateObject;
    const id = updateObject.id;
    let todos = [...state.todos];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        var keys = Object.keys(updateObject);
        for (let j = 0; j < keys.length; j++) {
          todos[i][keys[j]] = updateObject[keys[j]];
        }
      }
    }
    return {
      ...state,
      todos,
    };
  } else if (type === TODOS_FETCHED) {
    const { todos } = payload;
    return {
      ...state,
      todos,
    };
  }

  return state;
};

const initialUIData = {
  showToast: false,
  toastMsg: "",
  isLoading: true,
  isTodosLoading: false
};

export const uiData = (state = initialUIData, action) => {
  const { type, payload } = action;
  if (type === SHOW_TOAST) {
    const { msg } = payload;
    return {
      ...state,
      showToast: true,
      toastMsg: msg,
    };
  } else if (type === HIDE_TOAST) {
    return {
      ...state,
      showToast: false,
      toastMsg: "",
    };
  } else if (type === USER_STATE_FETCHED) {
    return {
      ...state,
      isLoading: false
    }
  } else if (type === FETCHING_TODOS) {
    return {
      ...state,
      isTodosLoading: true,
    };
  } 
  else if (type === TODOS_FETCHED) {
    return {
      ...state,
      isTodosLoading: false,
    };
  }

  return state;
};

const initialUserData = {
  userId: "",
};

export const userData = (state = initialUserData, action) => {
  const { type, payload } = action;

  if (type === UPDATE_USER_STATE) {
    const { userId } = payload;
    return {
      ...state,
      userId
    }
  }
  return state;
};
