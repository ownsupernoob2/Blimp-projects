


import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "../../screens/Home";
import Login from "../../screens/auth/Login";
import Register from "../../screens/auth/Register";
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
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
  );
}

export default Router;
