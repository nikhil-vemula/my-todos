import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { createTodo } from "../../redux/actions";
import { ITodo, RState, DispatchType } from "../../redux/types.d";

type Props = {
  todos: ITodo[];
  onCreatePressed: Function;
};
const NewTodoItem = (props: Props) => {
  const [inputValue, setInputValue] = useState("");
  const todos = props.todos || [];
  return (
    <div className="new-todo-form">
      <input
        type="text"
        placeholder="Type new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicateTodo = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateTodo) {
            props.onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
      >
        Create todo
      </button>
    </div>
  );
};

const mapStateToProps = (state: RState) => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
  onCreatePressed: (text: String) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoItem);
