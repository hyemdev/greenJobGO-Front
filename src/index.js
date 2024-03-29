import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </CookiesProvider>,
);
