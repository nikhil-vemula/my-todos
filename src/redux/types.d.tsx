type ITodo = {
    text: String
}

type TodoAction = {
    type: String
    payload: ITodo
}

type TodoState = {
    todos: ITodo[]
}

type RState = {
    todos: TodoState
}

type DispatchType = (args: TodoAction) => TodoAction

export type {ITodo, TodoAction, TodoState, DispatchType, RState};