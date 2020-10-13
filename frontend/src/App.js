import React from "react";
import logo from "./logo.svg";
import "./App.css";
import routes from "./routing";
import { useRoutes } from "react-router-dom";

const App = () => {
  const routing = useRoutes(routes);
  return <div>{routing}</div>;
};

export default App;