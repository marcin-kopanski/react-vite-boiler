import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "src/App";
import { MainRoutes } from "src/components/mainRoutes/MainRoutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <MainRoutes />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
);
