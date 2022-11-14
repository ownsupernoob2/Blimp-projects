import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";


const ballStyle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "black",
  borderRadius: "0.5rem"
};

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut"
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8
  }
};

const LoadingToRedirect = () => {
  let history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      history.push("/");
     }, 1500);

    return () => clearInterval(interval);
  }, [ history]);
  return (
  <div
      style={{
        width: "2rem",
        height: "2rem",
        display: "flex",
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: "space-around"
      }}
    >
      <motion.span
        style={ballStyle}
        transition={bounceTransition}
        animate={{
          y: ["100%", "-100%"],
          backgroundColor: ["#ff6699", "#6666ff"]
        }}
      />
    </div>
  );
};

export default LoadingToRedirect;
