import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { StoreProvider } from "./components/Store";

render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
