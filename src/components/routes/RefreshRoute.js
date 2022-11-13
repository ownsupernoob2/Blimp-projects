import React, {useState, useEffect} from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import LoadingToRedirect from "./LoadingToRedirect";

const RefreshRoute = ({ children, ...rest }) => {
    const  { user }  =  useSelector((state) => ({ ...state.user }));
    
    
  return user ? <Route {...rest} /> : <LoadingToRedirect /> ;
};

export default RefreshRoute;
