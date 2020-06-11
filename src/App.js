import React from "react";
import "./App.css";
import LoginPage from "./pages/loginPage";
import CoursePage from "./pages/coursePage"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AssignmentPage from "./pages/assignment/index";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route exact path="/assignment">
        <AssignmentPage/>
      </Route>
      {/* <Route path="/coursepage">
        <CoursePage />
      </Route> */}
    </Switch>
  </BrowserRouter>
);

export default App;
