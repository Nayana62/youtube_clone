import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WatchVideo from "./pages/WatchVideo";
import Demo from "./components/Demo";
import SearchResults from "./pages/SearchResults";
import ErrorPage from "./components/ErrorPage";

const error = {
  code: 404,
  message: "This page isn't available. Sorry about that.",
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
      {
        path: "/results",
        element: <SearchResults />,
      },
    ],
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "*",
    element: <ErrorPage error={error} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
