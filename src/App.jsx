import "./App.css";
import AllTodosView from "./components/AllTodosView/AllTodosView";
import ToastMessage from "./components/ToastMessage/ToastMessage";

function App() {
  return (
    <div className="App">
      <ToastMessage />
      <AllTodosView />
    </div>
  );
}

export default App;
