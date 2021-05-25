import "./NewTodoItem.css";
import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { createTodo } from "../../redux/actions";
import { ITodo, CreateTodoDispatchType, TotalState } from "../../redux/types.d";
import { Todo } from '../../common/Todo';
import ArrowForward from '@material-ui/icons/ArrowForward';

type Props = {
  openTodos: ITodo[];
  onCreatePressed: Function;
};
const NewTodoItem = (props: Props) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <div className="new-todo-item">
        <input
          type="text"
          placeholder="New Todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
        onClick={() => {
          props.onCreatePressed(inputValue);
          setInputValue("");
        }}>
        <ArrowForward/>
      </button>
      </div>
      
    </div>
  );
};

const mapStateToProps = (state: TotalState) => {
  let { todos } = state.todosData;
  var openTodos:ITodo[] = todos.filter(todo => todo.isComplete);
  return {
    openTodos
  }
};

const mapDispatchToProps = (dispatch: CreateTodoDispatchType) => ({
  onCreatePressed: (text: string) => {
    if (!text)
      return;
    
    var newTodo = new Todo(text);
    dispatch(createTodo(newTodo))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoItem);
