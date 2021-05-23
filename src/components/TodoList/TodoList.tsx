import React from 'react';
import { DispatchType, ITodo, RState } from '../../redux/types.d';
import TodoListItem from '../TodoListItem/TodoListItem'
import { connect } from 'react-redux';
import { removeTodo } from '../../redux/actions';

type Props = {
  todos: ITodo[]
  onRemovePressed: Function
}

const TodoList= (props: Props) => {
  const todos = props.todos || [];
  return (
    <div className="list-wrapper">
      List of todos
      {todos.map((todo: ITodo) => <TodoListItem todo={todo} onRemovePressed={props.onRemovePressed}/>)}  
    </div>
  );
}
const mapStateToProps = (state: RState) => ({
  todos: state.todos.todos
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
  onRemovePressed: (text: String) => dispatch(removeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
