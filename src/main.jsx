import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./useCases/Store/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import Router from "./ui_framework/router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={Router} />
  </Provider>
  // </React.StrictMode>
);
