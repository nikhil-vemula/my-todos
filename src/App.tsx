import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import NewTodoItem from "./components/NewTodoItem/NewTodoItem";

function App() {
  return (
    <div className="App">
      <NewTodoItem />
      <TodoList />
    </div>
  );
}

export default App;
