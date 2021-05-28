import "./LoginScreen.css";
import firebase, { authUI } from "../../common/firebase";
import "firebaseui/dist/firebaseui.css";

const LoginScreen = (props) => {
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };
  authUI.start("#firebaseui-auth-container", uiConfig);
  return (
    <div className="login-screen-container">
      <div id="firebaseui-auth-container"></div>
    </div>
  );
};

export default LoginScreen;
