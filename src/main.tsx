import "./styles/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "src/App";
import { MainRoutes } from "src/components/MainRoutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App>
      <MainRoutes />
    </App>
  </React.StrictMode>,
);
