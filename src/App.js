import React from "react";
import { Points, Steps } from "./components";
import logo from "./vital-ecommerce-logo.png";
import uglyLogo from "./ugly-logo.png";
import steps from "./steps";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import withFirebaseAuth, {
  WrappedComponentProps
} from "react-with-firebase-auth";
import * as firebaseui from "firebaseui";
import firebaseConfig from "./firebaseConfig";
const firebaseApp = firebase.initializeApp(firebaseConfig);

const App = ({
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithFacebook,
  signOut,
  setError,
  user,
  error
}: WrappedComponentProps) => {
  const database = firebase.database();

  if (user) {
    /**
     * If user is new, create new progress entry
     */

    /**
     * Check if user's progress is currently being tracked
     */

    const item = database.ref(`modules/step/-LpKwFk_SCaar9wCvOQA`);
    // item.once("value").then(data => {
    //   console.log(data.val());
    // });
    database
      .ref(`/progress/${user.uid}`)
      .once("value")
      .then(data => {
        if (data.val() === null) {
          /**
           * If user is new, create progress tracking
           */
          // for (let i = 0; i < steps.length; i++) {
          //   for (let j = 0; j < steps[i].steps.length; j++) {
          //     const newStepKey = database
          //       .ref()
          //       .child("step")
          //       .push().key;
          //     const step = {
          //       ...steps[i].steps[j],
          //       id: newStepKey
          //     };
          //     database.ref(`modules/step/${newStepKey}`).set(step);
          //   }
          // }
          // database.ref(`progress/${user.uid}/level/0/step/1`).set(false);
          // const newUserProgress = uid => {
          //   const newClientKey = database
          //     .ref()
          //     .child("points")
          //     .push().key;
          //   database.ref(`progress/${uid}/points`).set(0);
          // };
          // newUserProgress(user.uid);
        }
      });
  }
  return (
    <React.Fragment>
      {user ? (
        <div className="App">
          <header>
            {/* <div className="logo">
              <img src={logo} className="logo__image" />
            </div> */}
            <img
              src={uglyLogo}
              style={{
                width: "168px",
                display: "flex",
                margin: "0 auto"
              }}
            />
            {/* <span>Hi {user.displayName.split(" ")[0]}!</span> */}
            {/* <Points /> */}
          </header>
          <Steps />
        </div>
      ) : (
        <div>
          <img src={uglyLogo} className="login-logo" />
          <p
            style={{
              width: "240px",
              textAlign: "right",
              margin: "0 auto",
              paddingTop: "9px",
              lineHeight: "24px"
            }}
          >
            Learn e-commerce from 0-100 with Ross Libby
          </p>
        </div>
      )}
      {user ? (
        <button
          onClick={signOut}
          style={{
            margin: "0 auto",
            display: "flex",
            border: "0",
            width: "100%",
            justifyContent: "center",
            background: "none",
            padding: "10px 0"
          }}
        >
          Sign out
        </button>
      ) : (
        <button onClick={signInWithFacebook} className="facebook-login-button">
          <i
            className="fa fa-facebook-square"
            style={{
              fontSize: "22px"
            }}
          />
          <span className="facebook-login-button__text">
            Sign in with Facebook
          </span>
        </button>
      )}
    </React.Fragment>
  );
};

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  facebookProvider: new firebase.auth.FacebookAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
