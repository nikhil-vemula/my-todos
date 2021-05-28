import './TodoListItem.css';
import React from "react";
import RoundCheckbox from '../RoundCheckbox/RoundCheckbox';
import Close from '@material-ui/icons/Close';

const TodoList = (props) => {
  return (
    <div className="todo-list-item card">
      <RoundCheckbox id={props.todo.id} isChecked={props.todo.isComplete} onCompletePressed={props.onCompletePressed}/>
      <span className={!props.todo.isComplete ? 'open-todo' : 'closed-todo'}>{props.todo.text}</span>
      <button
        onClick={() => {
          props.onRemovePressed(props.todo.id);
        }}>
        {props.todo.isComplete ? <Close /> : ''}
      </button>
    </div>
    
  );
};

export default TodoList;


