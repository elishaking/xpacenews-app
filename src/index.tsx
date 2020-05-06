import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import axios from "axios";

if (process.env.NODE_ENV === "production")
  axios.defaults.baseURL = "https://xspacenews-bk.herokuapp.com";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
