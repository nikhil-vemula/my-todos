type ITodo = {
  text: string
  id: string
  isComplete: boolean
};

type TotalState = {
    todosData: TodoState
}

type TodoState = {
    todos: ITodo[]
};

type ITodoAction = {
    type: string;
    payload: any;
}

type CreateTodoAction = {
  type: string
  payload: ITodo
};

type CreateTodoDispatchType = (args: CreateTodoAction) => CreateTodoAction;

type RemoveTodoAction = {
  type: string
  payload: {id: string}
};

type RemoveTodoDispatchType = (args: RemoveTodoAction) => RemoveTodoAction;

export type {
  ITodo,
  TodoState,
  TotalState,
  ITodoAction,
  CreateTodoAction,
  CreateTodoDispatchType,
  RemoveTodoAction,
  RemoveTodoDispatchType,
};
