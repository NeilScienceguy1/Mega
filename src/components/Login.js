import React from 'react'
import { GoogleOutlined } from "@ant-design/icons"
import "firebase/app"
import firebase from "firebase"
import { auth } from "../firebase"

//91b5248a-4fbd-4d2e-bb31-5445b21ef8ba

const Login = () => {
    return (
      <div id="login-page">
        <div id="login-card">
          <h2>Welcome to MegaChat</h2>
          <div
            className="login-button google"
            onClick={() => {
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
            }}
          >
            <GoogleOutlined /> Sign In With Google
          </div>
          <br />
          <br />
          {/* <div
            className="login-button facebook"
            onClick={() => {
              auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
            }}
          >
            <FacebookOutlined /> Sign In With Facebook
          </div> */}
        </div>
      </div>
    );
}

export default Login
