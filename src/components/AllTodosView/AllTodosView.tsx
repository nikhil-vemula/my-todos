import "./AllTodosView.css"
import { connect } from 'react-redux';
import TodoList from "../TodoList/TodoList";
import NewTodoItem from "../NewTodoItem/NewTodoItem";
import { ITodo, TotalState } from '../../redux/types.d';

type Props = {
  openTodos?: ITodo[]
}

const AllTodosView = (props: Props) => {
  const openTodos = props.openTodos || [];
  return (
    <div id="all-todos-view-container">
        <NewTodoItem />
        <TodoList todos={openTodos} />
    </div>
  );
};

const mapStateToProps = (state: TotalState) => {
  let { todos = []} = state.todosData;
  let openTodos = todos;
  // var openTodos: ITodo[] = todos.filter(todo => !todo.isComplete);
  return {
    openTodos
  }
};

export default connect(mapStateToProps, null)(AllTodosView);