import React from "react";
import ReactDOM from "react-dom/client";
import { AddPage } from "./addPage";
import "./index.css";
import { ListPage } from "./listPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AddPage />
  </React.StrictMode>
);
