import "./AllTodosView.css"
import { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoList from "../TodoList/TodoList";
import NewTodoItem from "../NewTodoItem/NewTodoItem";
import { loadTodos } from '../../redux/thunks';

const AllTodosView = (props) => {
  const { todos } = props;
  const { loadAllTodos } = props;

  useEffect(() => {
    loadAllTodos();
  }, [loadAllTodos]);

  return (
    <div id="all-todos-view-container">
        <NewTodoItem />
        <TodoList todos={todos} />
    </div>
  );
};

const mapStateToProps = (state) => {
  let { todos = []} = state.todosData;
  return {
    todos,
  }
};

const mapDispatchToProps = (dispatch) => ({
  loadAllTodos: (id) => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllTodosView);