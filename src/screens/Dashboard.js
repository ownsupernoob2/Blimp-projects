import React from "react";
import { useDispatch, useSelector } from "react-redux"
import {
  logOutInitiate,
} from "../store/actions/user";

const Dashboard = () => {
const dispatch = useDispatch()
const  { user }  =  useSelector((state) => ({ ...state.user }));

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logOutInitiate());

  }


  return (
    <div >
 You have sucessfully signed in <br />
 <br />

 Hello, {user.displayName}.
 here is some information about your sign up
 <br /> 
 <br /> 
 {user.photoURL ? "You have signed in using Google" : "You have signed in using the form"}
 <br /> 
 <br /> 
 Your Emali is {user.email}
 <br /> 
 <br /> 
 Your User ID is {user.uid}
 <br /> 
 <br /> 
 Your profile pic:
 <img src={user.photoURL}  alt={"your profile"} />
 <br /> <br />
 <button onClick={handleSubmit}>Log out</button>
    </div>
  );
};

export default Dashboard;
