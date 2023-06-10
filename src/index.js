import React from "react";
import ReactDOM from "react-dom/client";
import * as pi from "./Math";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>
);
