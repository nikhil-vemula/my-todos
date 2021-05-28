import "./LoginScreen.css";
import { connect } from 'react-redux';
import firebase, { authUI } from "../../common/firebase";
import "firebaseui/dist/firebaseui.css";

const LoginScreen = (props) => {
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  if (props.userId === "NOT_LOGGED_IN")
    authUI.start("#firebaseui-auth-container", uiConfig)
  
  return (
    <div className="login-screen-container">
      <div id="firebaseui-auth-container"></div>
      
    </div>
  );
};

const mapStateToProps = (state) => {
  let { userId } = state.userData;
  return {
    userId,
  }
};

export default connect(mapStateToProps, null)(LoginScreen);
