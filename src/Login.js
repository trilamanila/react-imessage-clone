import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://iphoneroot.com/wp-content/uploads/2016/06/imessage1-android-500x208.png"
          alt="imessage logo"
        />
      </div>

      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
}

export default Login;
