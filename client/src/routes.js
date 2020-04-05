import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import {createBrowserHistory } from "history";
import signIn from "./component/signIn";
import Home from "./component/Home";
export const history = createBrowserHistory();
const logIn = localStorage.getItem('logIn');
console.log(logIn);

// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        {logIn?
              <Route path="/" component={Home} />
            :
              <Route path="/" component={signIn} />

        }
      </Switch>
    </div>
  </Router>
);

export default AppRouter;