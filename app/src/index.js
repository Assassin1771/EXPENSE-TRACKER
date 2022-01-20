import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "./context/Context";
import App from "./app";

ReactDOM.render(
  <>
    <Provider>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
