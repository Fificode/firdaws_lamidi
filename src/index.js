import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { FaSpinner } from "react-icons/fa";

const LazyApp = React.lazy(() => import("./App"));
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<FaSpinner className="animate-spin mx-auto text-2xl text-black " />}>
      <LazyApp />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
