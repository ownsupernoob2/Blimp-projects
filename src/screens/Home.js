import React, { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";

import Profile from "../components/layout/Profile"
import Meme from "../components/layout/Meme"
import Navbar from "../components/layout/Navbar"
import logo from "../components/assets/logo.png";


const Home = () => {
  const navbar = useRef(null);
  const { scrollY } = useScroll();



  const handleScroll = () => {
    if (scrollY.current > 30) {
      navbar.current.style.backgroundColor = "#1c8dd4";
      navbar.current.style.borderBottomWidth = "3px";
      navbar.current.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.15);";
    } else {
      navbar.current.style.backgroundColor = "transparent";
      navbar.current.style.borderBottomWidth = "0px";
      navbar.current.style.boxShadow = "none";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <div onScroll={handleScroll}>
      <nav ref={navbar} id="navbar">
        <Navbar />
      </nav>
      <section className="background firstsection">
        <div className="box-main">
          <motion.div
            initial={{ opacity: 0, y: "-15vh" }}
            animate={{
              y: "0",
              opacity: 1,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
            className="firstHalf"
          >
            <p className="text-big left">
              Welcome to the Blimp Academy Profile Site
            </p>
            <br />
            <p className="text-small left">
              Hey Blimpies! This site is to contain your Blimp profiles and
              achievements in a place other than Confluence, for the sake of
              organization. It's free, easy to edit, and accessable by all.
              We'll see you, flying in the high skies!
            </p>
            <br />
            <p className="center left">
              <a
                href="#Order"
                style={{ textDecoration: "none", color: "white" }}
              >
                Confused about what Blimp Academy is? Check out our
              </a>
              <a href="https://www.blimpacademy.com/"> website</a> for
              information about how our company works, as well as a way to
              purchase our merchandise!
            </p>
          </motion.div>
        </div>
      </section>
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <div id="Description">
          <h1 style={{ marginBottom: 5 }}>What am I looking at?</h1>
          <div style={{ borderTop: "5px solid black", width: 75 }} />
          <br />
          <p>
            A blender of work from Mina, Jonathan and Yoga (And the designers,
            kinda, sure why not: Eian and Joshua). The Programming team
          </p>
        </div>
      </div>
      <section id="about" className="service">
  <h1 className="Section reveal" style={{ marginTop: 50 }}>
    About Us
  </h1>
  <div className="grid-container">
    <section className="section-type">
      <div className="container">
        <div className="text-box  reveal">
          <h3>STUDENTS WHO LOVE TO LEARN</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius molestiae perferendis eos provident vitae iste.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="text-box  reveal">
          <h2>STUDENTS WHO LOVE TO LEARN</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius molestiae perferendis eos provident vitae iste.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="text-box  reveal">
          <h3>STUDENTS WHO LOVE TO LEARN</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius molestiae perferendis eos provident vitae iste.
          </p>
        </div>
      </div>
    </section>
  </div>
</section>

    <Profile />
    <Meme />
    </div>
  );
};

export default Home;
