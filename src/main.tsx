import React from "react";
import ReactDOM from "react-dom/client";
import App from "./features/App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import { DarkTheme } from "@design-system/theme.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={DarkTheme}>
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  </React.StrictMode>
);
