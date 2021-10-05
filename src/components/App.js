import React from "react";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Editor from "./Editor/Editor";
import NotFound from "./General UI/404/404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Editor />
    // <Router>
    //   <Route exact path="/">
    //   <Editor />
    //   <Route/>
    //     {/* <Header />
    //     <Dashboard />
    //   </Route>
    //   <Route path="/editor">
    //     <Editor />
    //   </Route>
    //   <Header />
    //   <Dashboard />                                                                      */}
    // </Router>
  );
};

export default App;
