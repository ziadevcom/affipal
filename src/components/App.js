import React from "react";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Dashboard />
    </Router>
  );
};

export default App;
