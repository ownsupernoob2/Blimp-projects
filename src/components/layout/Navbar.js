import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  getUsersInitiate,
} from "../../store/actions/profile";
import Profile from "./Profile";
import Meme from "./Meme";
import logo from "../assets/logo.png";

const containerVariants = {
  hidden: {
    x: 200,
    transition: {
      staggerChildren: 0.1,
    },
  },
  animation: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 2.5,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: {
    y: -5,
    opacity: 1,
  },
  animation: {
    y: [-5, -15],
    opacity: [0.8, 1],
    scale: [1, 1.05],
    transition: {
      opacity: {
        yoyo: 4,
        duration: 0.6,
        ease: "easeInOut",
      },
      scale: {
        yoyo: 3,
        duration: 0.6,
        ease: "easeInOut",
      },
      y: {
        yoyo: 3,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  },
};

const Navbar = () => {

  const  auth =  useSelector((state) => ({ ...state.user }));
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState(null)

  //Because our reducer use with key data


  const dispatch = useDispatch();

   
  useEffect(() => {
    const handleDelay = async () => {
      setIsLoading(true)
      await dispatch(getUsersInitiate());
      useSelector((state) => state.data);
      console.log("loaded")
    };

    handleDelay();
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(false)
      console.log('timer finished')
     }, 4000);

    return () => clearInterval(interval);
  }, []);

    const asArray = Object.entries(justStrings);
  
  const filtered = asArray.filter(([key, value]) => value.ownerId === auth.user.uid)
  
  const usersFunction = Object.fromEntries(filtered);
  
  const users = Object.values(usersFunction)


  let linkStyle = {
    display: "flex",
    paddingLeft: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  };
  let imgStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    backgroundColor: '#0d78bb',
    borderRadius: 50 / 2,
    border: "solid 2px #ffc400",
    marginLeft: 15,
  };

  return (
    <>
      <motion.div
        className="logo"
        variants={containerVariants}
        initial="hidden"
        animate="animation"
      >
        <img
          src={logo}
          height="50x"
          alt="Blimp logo"
          style={{ marginRight: "10px" }}
        />
        <motion.span variants={childVariants}>B</motion.span>
        <motion.span variants={childVariants}>L</motion.span>
        <motion.span variants={childVariants}>I</motion.span>
        <motion.span variants={childVariants}>M</motion.span>
        <motion.span variants={childVariants}>P</motion.span>
        <motion.span variants={childVariants}>‏‏‎ ‎</motion.span>
        <motion.span variants={childVariants}>A</motion.span>
        <motion.span variants={childVariants}>C</motion.span>
        <motion.span variants={childVariants}>A</motion.span>
        <motion.span variants={childVariants}>D</motion.span>
        <motion.span variants={childVariants}>E</motion.span>
        <motion.span variants={childVariants}>M</motion.span>
        <motion.span variants={childVariants}>Y</motion.span>
      </motion.div>

      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <li style={linkStyle}>
            <a href="#">Home</a>
          </li>
          <li style={linkStyle}>
            <a href="#meme-maker">Projects</a>
          </li>
          <li style={linkStyle}>
            <a href="#about">About</a>
          </li>
          
          {  isLoading ?              <li
              style={{
                display: "flex",
                paddingLeft: 15,
                paddingRight: 35,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link className='focus-text' to="/dashboard">Loading...</Link>
           </li>
           :
            !auth.user && !justStrings ? (
            <li     style={{
                display: "flex",
                paddingLeft: 20,
                paddingRight: 20,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <li
              style={{
                display: "flex",
                paddingLeft: 15,
                paddingRight: 35,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link className='focus-text' to="/dashboard">{users[0].name}</Link>
              {users[0].profilePic ? (
                <img
                  alt={"Profile pic"}
                  style={imgStyle}
                  src={users[0].profilePic}
                />
              ) : (
                <div style={imgStyle}>{users[0].name}</div>
              )}
            </li>
          )}
        </div>
      </ul>
    </>
  );
};

export default Navbar;
