import React, {useState, useEffect} from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import RefreshRoute from "./RefreshRoute";
import LoadingToRedirect from "./LoadingToRedirect";

const AnyRoute = ({ children, ...rest }) => {
    let history = useHistory();
    const  { user }  =  useSelector((state) => ({ ...state.user }));
    
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);
      const interval = setInterval(() => {
        setIsLoading(false);
       }, 900);
  
      return () => clearInterval(interval);
    }, [ history]);
    
  return user ? <Route {...rest} /> : <LoadingToRedirect /> ;
};

export default AnyRoute;
