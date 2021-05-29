import "./TodoListItem.css";
import React, { createRef, useState } from "react";
import RoundCheckbox from "../RoundCheckbox/RoundCheckbox";
import Close from "@material-ui/icons/Close";
import Edit from "@material-ui/icons/Edit";
import Done from "@material-ui/icons/Done";

const TodoListItem = (props) => {
  const [readOnly, setReadOnly] = useState(true);
  const todoTextRef = createRef();
  return (
    <div className="todo-list-item card" id={props.todo.id}>
      <RoundCheckbox
        id={props.todo.id}
        isChecked={props.todo.isComplete}
        onCompletePressed={props.onCompletePressed}
      />
      <div
        ref={todoTextRef}
        type="text"
        contentEditable={!readOnly}
        suppressContentEditableWarning={true}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "Escape") {
            setReadOnly(true);
            var todoText = todoTextRef.current.textContent;
            let updateObject = {};
            updateObject.id = props.todo.id;
            updateObject.text = todoText;
            props.onTodoTextChanged(updateObject);
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        className={
          !props.todo.isComplete
            ? "open-todo todo-text"
            : "closed-todo todo-text"
        }
      >
        {props.todo.text}
      </div>
      {!props.todo.isComplete ? (
        <button
          onClick={() => {
            if (!readOnly) {
              setReadOnly(true);
              var todoText = todoTextRef.current.textContent;
              let updateObject = {};
              updateObject.id = props.todo.id;
              updateObject.text = todoText;
              props.onTodoTextChanged(updateObject);
            } else {
              setReadOnly(false);
            }
          }}
        >
          {readOnly ? <Edit /> : <Done />}
        </button>
      ) : (
        ""
      )}
      {props.todo.isComplete ? (
        <button
          onClick={() => {
            props.onRemovePressed(props.todo.id);
          }}
        >
          <span role="button">
            <Close />
          </span>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoListItem;
