import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";


import {
  getUsersInitiate,
} from "../store/actions/profile";
import Profile from "../components/layout/Profile";
import Meme from "../components/layout/Meme";
import Navbar from "../components/layout/Navbar";
import logo from "../components/assets/logo.png";

const Home = () => {
  const navbar = useRef(null);
  const { scrollY } = useScroll();
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch();


  
    //Because our reducer use with key data
    const { users } = useSelector((state) => state.data);
  
   
    
    useEffect(() => {
      const handleDelay = async () => {
        setIsLoading(true)
        await dispatch(getUsersInitiate());
        setIsLoading(false)
        console.log("loaded")
      };
  
      handleDelay();
    }, []);

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
    <>
    {isLoading ? <div>hi</div> : 
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
              <br></br>
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
                Want to know more about what Blimp Academy is? Check out our
              </a>
              <a href="https://www.blimpacademy.com/"> website</a> for
              information about how our company works, as well as a way to
              purchase our merchandise!
            </p>
          </motion.div>
        </div>
      </section>
      <div style={{ display: "flex",   backgroundColor: '#1c8dd4', justifyContent: "center", width: "100%" }}>
        <div id="Description">
          <h1 style={{ marginBottom: 5, color: "#333" }}>
            WHAT AM I LOOKING AT?
          </h1>
          <div
            style={{ borderTop: "3px solid #333", width: 65, marginTop: 10 }}
          />
          <br />
          <p>
            <font size="+1" style={{ fontWeight: 100, color: "#333" }}>
              A functional multipurposed Blimp website created by Mina,
              Jonathan, and Yoga, as well as design-assisted by Eian and Joshua
              - <font color="blue">The Programming Team!</font>
            </font>
          </p>
        </div>
      </div>
      <section id="about" className="service">
      <div style={{backgroundColor: '#1c8dd4'}}>
        <div
          className="grid-container"
          style={{
            justifyContent: "center",
            width: "100%",
          }}
        >
          <section className="section-type">
            <motion.div
              initial={{ opacity: 0, x: "-60vh" }}
              viewport={{ once: true }}
              whileInView={{
                x: "0",
                opacity: 1,
                transition: { duration: 2.3, delay: 0, ease: "easeInOut" },
              }}
              className="container"
            >
              <div className="text-box">
                <h3 style={{ color: "white" }}>STUDENTS WHO LOVE TO LEARN</h3>
                <p styles={{ color: "#eee" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore eius molestiae perferendis eos provident vitae iste.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "60vh" }}
              viewport={{ once: true }}
              whileInView={{
                x: "0",
                opacity: 1,
                transition: { duration: 2.3, delay: 0, ease: "easeInOut" },
              }}
              className="container"
            >
              <div className="text-box">
                <h3 style={{ color: "white" }}>STUDENTS WHO LOVE TO LEARN</h3>
                <p styles={{ color: "#eee" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore eius molestiae perferendis eos provident vitae iste.
                </p>
              </div>
            </motion.div>
          </section>
        </div>
        <motion.div
          initial={{ opacity: 0, y: "-40vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 2.3, delay: 0, ease: "easeInOut" },
          }}
          className="container"
        >
          <div className="text-box">
            <h3 style={{ color: "white" }}>STUDENTS WHO LOVE TO LEARN</h3>
            <p styles={{ color: "#eee" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eius molestiae perferendis eos provident vitae iste.
            </p>
          </div>
        </motion.div>
        </div>
      </section>

      <Profile />
      <Meme />
    </div>
    }
    </>
  );
};

export default Home;
