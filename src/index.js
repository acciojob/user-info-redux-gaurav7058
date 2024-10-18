import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM
import App from "./components/App"; 
import { Provider } from "react-redux";
import store from "./utils/store";

// Use ReactDOM.render to render the App wrapped in the Provider component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
);

