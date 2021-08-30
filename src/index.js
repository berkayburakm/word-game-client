import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Game from "../src/context/GameContext";

ReactDOM.render(
  <React.StrictMode>
    <Game>
      <App />
    </Game>
  </React.StrictMode>,
  document.getElementById("root")
);
