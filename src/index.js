import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// eslint-disable-next-line
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
