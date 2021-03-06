import "./NewTodoItem.css";
import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { createTodo } from "../../redux/thunks";
import ArrowForward from "@material-ui/icons/ArrowForward";

const NewTodoItem = (props) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <div className="new-todo-item">
        <input
          type="text"
          placeholder="New Todo"
          value={inputValue}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              props.onCreatePressed(inputValue);
              setInputValue("");
            }
          }}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            props.onCreatePressed(inputValue);
            setInputValue("");
          }}
        >
          <ArrowForward />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let { todos } = state.todosData;
  var openTodos = todos.filter((todo) => todo.isComplete);
  return {
    openTodos,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => {
    if (!text) return;
    dispatch(createTodo(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoItem);
