import React from "react";
import "./App.css";
import LoginPage from "./pages/loginPage";
import CoursePage from "./pages/coursePage"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
const App = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/course">
          <CoursePage/>
        </Route>
      </Switch>
    </BrowserRouter>
);

export default App;
