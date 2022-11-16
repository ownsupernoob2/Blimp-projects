import React, { useEffect} from "react";
import { motion, useScroll } from "framer-motion";

import Profile from "./Profile"
import Meme from "./Meme"
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
            height="50px"
            alt="Blimp logo"
            style={{ marginRight: "10px" }}
          />
          <motion.span  variants={childVariants}>B</motion.span>
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
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </div>
        </ul>

    </>
  );
};

export default Navbar;
