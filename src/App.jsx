import "./App.css";
import { connect } from "react-redux";
import AllTodosView from "./components/AllTodosView/AllTodosView";
import ToastMessage from "./components/ToastMessage/ToastMessage";
import LoginScreen from "./components/LoginScreen/LoginScreen";

function App(props) {
  return (
    <div className="App">
      {!props.isLoading ? (
        !props.userId ? (
          <LoginScreen />
        ) : (
          <div>
            <ToastMessage />
            <AllTodosView />
          </div>
        )
      ) : (
        ""
      )}
      {}
    </div>
  );
}

const mapStateToProps = (state) => {
  let { userId } = state.userData;
  let { isLoading } = state.uiData;
  return {
    userId,
    isLoading,
  };
};

export default connect(mapStateToProps, null)(App);
