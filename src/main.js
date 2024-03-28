import ReactDOM from "react-dom/client";
import React, { createContext } from "react";
import App from "./App.jsx";
import "./index.css";
import ProductStore from "./store/ProductStore.js";

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context.Provider
      value={{
        store: new ProductStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
