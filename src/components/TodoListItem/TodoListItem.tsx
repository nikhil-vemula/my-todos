import React from "react";
import { ITodo } from "../../redux/types.d";

type Props = {
  todo: ITodo;
  onRemovePressed: Function;
};

const TodoList = (props: Props) => {
  return (
    <div className="todo-list-item">
      <h3>{props.todo.text}</h3>
      <button
        onClick={() => {
          props.onRemovePressed(props.todo.text);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoList;
