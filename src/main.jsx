import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AboutChannelProvider } from "./contexts/aboutChannel.jsx";
import { AuthProvider } from "./contexts/auth.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AboutChannelProvider>
          <App />
        </AboutChannelProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
