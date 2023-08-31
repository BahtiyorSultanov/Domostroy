import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemContext } from "./context/Context.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemContext>
      <QueryClientProvider client={new QueryClient()}>
        <App />
      </QueryClientProvider>
    </ThemContext>
  </React.StrictMode>
);
