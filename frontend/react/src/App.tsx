import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Nav from "./Nav";
import FetchingPage from "./pages/FetchingPage";

export default function App() {
  return <Router basename='ui'>
    <Nav/>
    <Switch>
      <Route path="/page-1">
        <div>
          <Page1/>
        </div>
      </Route>
      <Route path="/page-2">
        <Page2/>
      </Route>
      <Route path="/fetch">
        <FetchingPage/>
      </Route>
      <Route path="/">
        <div>This is home!</div>
      </Route>
    </Switch>
  </Router>
}
