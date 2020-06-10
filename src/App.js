import React from "react";
import "./App.css";
import LoginPage from "./pages/loginPage";
import AssignmentPage from "./pages/assignment";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route path="/assignment">
        <AssignmentPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
