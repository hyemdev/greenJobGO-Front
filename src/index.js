import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { FadeLoader } from "react-spinners";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Suspense fallback={<FadeLoader color="#36d7b7" />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </RecoilRoot>,
);
