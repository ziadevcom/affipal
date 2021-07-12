import React from "react";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Editor from "./Editor/Editor";
import NotFound from "./General UI/404/404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <Header />
        <Dashboard />
      </Route>
      <Route exact path="/dashboard">
        <Header />
        <Dashboard />
      </Route>
      <Switch>
        <Route path="/editor">
          <Editor />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
