import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./components/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <body className="bg-white min-h-screen dark:bg-slate-900 transition-all">
        <Router>
          <App />
        </Router>
      </body>
    </ThemeProvider>
  </React.StrictMode>
);
