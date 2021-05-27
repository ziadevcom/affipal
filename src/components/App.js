import React from "react";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Editor from "./Editor/Editor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/editor">
          <Editor />
        </Route>
        <Route path="/">
          <Header />
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
