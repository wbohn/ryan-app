import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Jonas } from "./routes/Jonas";
import { Ed } from "./routes/Ed";
import { Carol } from "./routes/Carol";

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/tat.jpg"}
          className="App-logo"
          alt="tat"
        />
      </header>
    </div>
  );
}

function Gump() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/gump.gif"}
          className="App-logo"
          alt="gump"
        />
      </header>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "emily",
    element: <Gump />,
  },
  {
    path: "ryan",
    element: <Gump />,
  },
  {
    path: "brandi",
    element: <Gump />,
  },
  {
    path: "mom",
    element: <Gump />,
  },
  {
    path: "sara",
    element: <Gump />,
  },
  {
    path: "lucy",
    element: <Gump />,
  },
  {
    path: "penny",
    element: <Gump />,
  },
  {
    path: "jonas",
    element: <Jonas />,
  },
  {
    path: "ed",
    element: <Ed />,
  },
  {
    path: "carol",
    element: <Carol />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
