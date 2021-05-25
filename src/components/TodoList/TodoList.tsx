import "./TodoList.css";
import React from "react";
import { RemoveTodoDispatchType, ITodo } from "../../redux/types.d";
import TodoListItem from "../TodoListItem/TodoListItem";
import { connect } from "react-redux";
import { markTodo, removeTodo } from "../../redux/actions";

type Props = {
  todos: ITodo[];
  label?: string;
  onRemovePressed: Function;
  onCompletePressed: Function;
};

const TodoList = (props: Props) => {
  const todos = props.todos || [];
  let label = props.label ? props.label : "";
  return (
    <div className="list-wrapper">
      {label ? <span className="list-label">{label}</span> : ""}
      {todos.map((todo: ITodo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemovePressed={props.onRemovePressed}
          onCompletePressed={props.onCompletePressed}
        />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch: RemoveTodoDispatchType) => ({
  onRemovePressed: (id: string) => dispatch(removeTodo(id)),
  onCompletePressed: (id: string, isComplete: boolean) => {dispatch(markTodo(id, isComplete))}
});

export default connect(null, mapDispatchToProps)(TodoList);
