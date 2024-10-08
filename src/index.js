import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as StateProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import "./theme/index.scss";

import reportWebVitals from "./reportWebVitals";
import { persistor, store } from "./service/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
