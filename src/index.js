// IMPORT BROWSER ROUTER
import { BrowserRouter } from "react-router-dom";
// IMPORT PROVIDER
import { Provider } from "react-redux";
// IMPORT STORE
import store from "./store";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
