


import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "../../screens/Home";
import Auth from "../../screens/auth/Auth";
import Dashboard from "../../screens/Dashboard";
import UserRoute from "./UserRoute";
import { auth } from "../../config/fbConfig";
import { setuser } from "../../store/actions/user";



function Router() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setuser(authUser));
      } else {
        dispatch(setuser(null));
      }
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Auth} />
          <UserRoute path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>
  );
}

export default Router;
