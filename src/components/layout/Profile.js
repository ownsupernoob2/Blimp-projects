import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Mina from "../assets/Mina.png";
import Rachel from "../assets/Rachel.jpg";
import Oliver from "../assets/Oliver.jpg";


const Profile = () => {
  return (
    <section id="about" className="service">
      <h1 className={`Section`} style={{ marginTop: 50 }}>
        Our Blimpies!
      </h1>
      <div className="grid-container">
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          <div className="profile-image">
            <img
              src="https://static.wixstatic.com/media/43457e_36bec7f1346546d7a259c01cf4ffa5bf~mv2.png/v1/crop/x_24,y_13,w_954,h_943/fill/w_245,h_245,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Nadia.png                "
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Nadia Putri</h3>
            <h5>CEO &amp; CMO</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              Hey, I'm Nadia, a philomath with a keen love for fictional
              characters and spicy food! I enjoy visual design, literary writing
              and speech &amp; debate. I'm in charge of
              overseeing all processes and making sure Blimp Academy achieves our yearly
              goals.
            </p>
            <br />
            <div className="icons">
              <a href="#">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          <div className="profile-image">
            <img
              src="https://static.wixstatic.com/media/43457e_f15809147b9b4746a75feaafa0309554~mv2.png/v1/crop/x_62,y_25,w_910,h_929/fill/w_239,h_244,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Jon.png"
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Jonathan Lai</h3>
            <h5>Chief Program Officer</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
            Hi there, I'm Jonathan, an eccentric elder brother with a penchant for chess, coding, and looking really bad in photos (see above reference). I'm in charge of BA's Programs, including the Foundational Track!
            </p>
            <br />
            <div className="icons">
              <a href="#">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          <div className="profile-image">
            <img
              className="border-set"
              src="https://static.wixstatic.com/media/e5a308_99bb42132c844be6834e9959e321959d~mv2.jpeg/v1/crop/x_327,y_392,w_951,h_940/fill/w_240,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/BLIMP%20PIC.jpeg"
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Elise Jo.</h3>
            <h5>Chief Finance Officer</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              What's up? I'm the CFO of Blimp Academy or in other words, the
              "money girl". I love reading, eating, and hanging out with
              friends. Also, I transfer your salary monthly. PLEASE don't have a
              strike if I forget!
            </p>
            <br />
            <div className="icons">
              <a href="#">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          <div className="profile-image">
            <img
              src="https://static.wixstatic.com/media/43457e_ef9b1c5b784c40c59210bb187e262c27~mv2.png/v1/crop/x_25,y_33,w_943,h_937/fill/w_255,h_254,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Eian.png"
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Eian Lai</h3>
            <h5>Graphic Design Lead</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              Hey there! I like writing, designing on Adobe Illustrator, coding
              on Scratch, and Unity. I also enjoy creating make-belief
              characters. I'm quite creative if I do say so myself.
            </p>
            <br />
            <div className="icons">
              <a href="#">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          <div className="profile-image">
            <img
              src="https://static.wixstatic.com/media/43457e_9ee63b1578314b368aaa0b0b3bcd01a8~mv2.png/v1/crop/x_36,y_36,w_939,h_930/fill/w_255,h_254,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Jova.png"
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Amadeo Jova</h3>
            <h5>People Care Officer</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              Hello! I’m Jova and I like Programming and reading, I like to
              listen to music while doing my work and when I read. I am an
              ambivert (50% introvert 50% extrovert). Sometimes I am
              introverted, and sometimes I am an extroverted.
            </p>
            <br />
            <div className="icons">
              <a href="#">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          <div className="profile-image">
            <img
              src="https://static.wixstatic.com/media/43457e_211255295f9a4e348fcd55256c49461b~mv2.png/v1/crop/x_36,y_29,w_932,h_931/fill/w_254,h_254,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Ella.png"
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Ella Nicolaus</h3>
            <h5>Chief People Officer</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              Greetings! I love reading books, drawing, and animating on various
              art platforms. You might find me eating some snacks while watching
              something, goofing around with friends, or working hard on a
              project!
            </p>
            <br />
            <div className="icons">
              <a href="#">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          <div className="profile-image">
            <img
              src="https://static.wixstatic.com/media/43457e_6c873f15113343b4903e16ae745a8700~mv2.png/v1/crop/x_46,y_32,w_926,h_935/fill/w_255,h_258,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Mateo.png"
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Mateeo Winata</h3>
            <h5>CMO</h5>
            <p style={{ color: "rgb(255, 255, 255)" }}>
              Hello, I'm a logic-minded problem solver who likes math and is the
              comedic relief of the team. I'm in charge of partnerships, so if
              we ever partner with Elon Musk in the future, you'll know I was
              behind it. I'm creative, I can see patterns in a lot of things, I
              like to solve problems, and I like dogs and cats.
            </p>
            <div className="icons">
              <a href="#">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          <div className="profile-image">
            <img
              src="https://static.wixstatic.com/media/43457e_46bdc30e682a49f98134858c72cd492c~mv2.png/v1/crop/x_44,y_24,w_928,h_944/fill/w_254,h_258,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Yoga.png"
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Budiyoga Nurhalim</h3>
            <h5>Tech Developer</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              I'm an undersized human-sized human who manages benefits and
              promotions at Blimp Academy. I can make web pages and play the
              piano. I like to eat and play video games such as Mindustry.
            </p>
            <br />
            <div className="icons">
              <a href="#">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          <div className="profile-image">
            <img
              src="https://static.wixstatic.com/media/43457e_de243bf1145446e080d0c392ca22aa92~mv2.png/v1/crop/x_29,y_18,w_943,h_955/fill/w_256,h_258,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kim.png"
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Kimberly King</h3>
            <h5>Brand Manager</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              Hello, I'm the brand manager for Blimp Academy! I love making
              music, and rollerblading. You'll probably find me lost in a book,
              or playing one of my instruments.
            </p>
            <br />
            <div className="icons">
              <a href="#">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          <div className="profile-image">
            <img
              src="https://static.wixstatic.com/media/43457e_cf9b6f9c89174159982cad88f7dbc50e~mv2.png/v1/crop/x_36,y_40,w_928,h_934/fill/w_252,h_254,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sam.png"
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Sam Nicolaus</h3>
            <h5>Finance Officer</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              Hello, I love playing games and playing sports, I can be very
              sensitive sometimes and I love to cause drama.
            </p>
            <br />
            <div className="icons">
              <a href="#">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          <div className="profile-image">
            <img
              src="https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg"
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Lyndsey Chen</h3>
            <h5>Intern</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              <font size={-1}>[lorem ipsum]</font>
              <br />
              <br />
            </p>
            <div className="icons">
              <a href="mailto:lyndseychen11@gmail.com">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          {" "}
          <div className="profile-image">
            <img
              src="https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg"
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Diandra Panjaitan</h3>
            <h5>Intern</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              <font size={-1}>[lorem ipsum]</font>
              <br />
              <br />
            </p>
            <div className="icons">
              <a href="mailto:Diandraallegra27@gmail.com">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          {" "}
          <div className="profile-image">
            <img
              src="https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg"
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Kayla Sucipto</h3>
            <h5>Intern</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              <font size={-1}>[lorem ipsum]</font>
              <br />
              <br />
            </p>
            <div className="icons">
              <a href="mailto:adelinekayla14@gmail.com">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          {" "}
          <div className="profile-image">
            <img
              src="https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg"
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Maryam Fuad</h3>
            <h5>Intern</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              <font size={-1}>Hello! My name is Maryam Fuad. My skillset includes management and SEO. In my free time I like creating episodes for my podcast every Friday. I like spending time with my family and capturing pictures.</font>
              <br />
              <br />
            </p>
            <div className="icons">
              <a href="mailto:sabashopservice@gmail.com">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          {" "}
          <div className="profile-image">
            <img
              src={Mina}
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Mina Fuad</h3>
            <h5>Intern</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              <font size={-1}>
                Hayo, to make a long story short I’m a full stack Web Developer
                and App Developer, I like talking about fun topics, working with
                a team and creating animation to make my apps and websites more
                fluid :).
              </font>{" "}
              <br />
              <br />
            </p>
            <div className="icons">
              <a href="mailto:pufferrfissh@duck.com">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          {" "}
          <div className="profile-image">
            <img
              src={Rachel}
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Rachel Liu</h3>
            <h5>Intern</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              <font size={-2}>Hey guys, nice to meet you! I'm Rachel, an artistic older sibling who's a big fan of music, volleyball, karaoke, and a variety of other hobbies. I'm part of the Finance Team, but I am open and flexible to anything and everything!</font>
              <br />
              <br />
            </p>
            <div className="icons">
              <a href="mailto:rachelfaithliu@gmail.com">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          {" "}
          <div className="profile-image">
            <img
              src="https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg"
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Joshua Liu</h3>
            <h5>Intern</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              <font size={-1}>
                Hi, My name is Joshua and I have just started my journey at
                Blimp Academy. I am a 'middle child' with a strong interest
                towards Table Tennis, and I have a lifelong passion for eating.
              </font>
              <br />
              <br />
            </p>
            <div className="icons">
              <a href="mailto:joshuaephraimliu@gmail.com">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: "-15vh" }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="card"
        >
          {" "}
          <div className="profile-image">
            <img
              src={Oliver}
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Oliver Rahardjo</h3>
            <h5>Intern</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              <font size={-1}>
                Hello! My name is Oliver and I joined Blimp Academy at the end of
                2022. I am privileged to be a part of the Academy - I have
                learnt useful skills and made new friends. I cannot wait to grow
                with the Blimp community as a Blimpy!
              </font>
              <br />
              <br />
            </p>
            <div className="icons">
              <a href="mailto:Oliverar@ischoolwest.com">Contact me here!</a>
            </div>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
};

export default Profile;
