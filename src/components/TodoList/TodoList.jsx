import "./TodoList.css";
import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import { connect } from "react-redux";
import { updateTodo, removeTodo } from "../../redux/thunks";

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
          onTodoTextChanged={props.onTodoTextChanged}
        />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodo(id)),
  onCompletePressed: (updateObject) => dispatch(updateTodo(updateObject)),
  onTodoTextChanged: (updateObject) => dispatch(updateTodo(updateObject)),
});

export default connect(null, mapDispatchToProps)(TodoList);
