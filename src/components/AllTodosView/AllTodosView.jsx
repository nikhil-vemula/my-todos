import "./AllTodosView.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import TodoList from "../TodoList/TodoList";
import NewTodoItem from "../NewTodoItem/NewTodoItem";
import { loadTodos } from "../../redux/thunks";
import EmptyTodoList from "../EmptyTodoList/EmptyTodoList";
import LinearProgress from '@material-ui/core/LinearProgress';

const AllTodosView = (props) => {
  const { todos } = props;
  const { loadAllTodos } = props;

  useEffect(() => {
    loadAllTodos();
  }, [loadAllTodos]);

  return (
    <div id="all-todos-view-container">
      <NewTodoItem />
      {!props.isTodosLoading ? (
        todos.length > 0 ? (
          <TodoList todos={todos} />
        ) : (
          <EmptyTodoList />
        )
      ) : (
        <div className="todos-loading">
          <LinearProgress />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  let { todos = [] } = state.todosData;
  let { isTodosLoading } = state.uiData;
  return {
    todos,
    isTodosLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadAllTodos: (id) => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllTodosView);
