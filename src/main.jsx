import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ColorSchemeProvider } from "./contexts/ColorSchemeContext.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorSchemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ColorSchemeProvider>
  </React.StrictMode>
);
