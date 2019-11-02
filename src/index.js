import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "./styles.css";

function Main() {
  return <App />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  rootElement
);
