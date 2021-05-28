import "./EmptyTodoList.css";
import React from "react";
import DoneAll from "@material-ui/icons/DoneAll";

const EmptyTodoList = (props) => {
  return (
    <div className="empty-todo-list">
      <div>
        <div><DoneAll /></div>
        <span>Looks empty</span>
        </div>
    </div>
  );
};

export default EmptyTodoList;
