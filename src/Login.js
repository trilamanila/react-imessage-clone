import { Button } from "@material-ui/core"
import React from 'react'
import { auth, provider } from "./firebase"
import './Login.css'

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img
                 src="http://www.newdesignfile.com/postpic/2014/03/imessage-icon_27015.png"
                 alt="imessage logo"
                 />
                 <h1>iMessage</h1>
            </div>

            <Button onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login
