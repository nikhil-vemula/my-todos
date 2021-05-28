import "./TodoList.css";
import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import { connect } from "react-redux";
import { markTodo, removeTodo } from "../../redux/actions";

const TodoList = (props) => {
  const todos = props.todos || [];
  let label = props.label ? props.label : "";
  return (
    <div className="list-wrapper">
      {label ? <span className="list-label">{label}</span> : ""}
      {todos.map((todo) => (
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

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodo(id)),
  onCompletePressed: (id, isComplete) => {dispatch(markTodo(id, isComplete))}
});

export default connect(null, mapDispatchToProps)(TodoList);
