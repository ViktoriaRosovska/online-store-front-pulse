import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import App from "./App.jsx";
import store from './store/store';

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
