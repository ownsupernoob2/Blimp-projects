import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Configuration, OpenAIApi } from "openai";
import Filter from "bad-words";
import axios from "axios";

import memeImg from "../assets/meme.jpeg";

const Meme = () => {
  const meme_img = useRef(null);
  const [meme, setMeme] = useState("*Meme will be here*");
  const [value, setValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const memeMaker = async (event) => {
    event.preventDefault();


    // allows to edit input
    let filter = new Filter();
    setIsDisabled(true);

    // makes sure the input isnt empty
    if (value === "") {
      setIsDisabled(false)
     meme_img.current.src =
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fil9.picdn.net%2Fshutterstock%2Fvideos%2F6690725%2Fthumb%2F1.jpg&f=1&nofb=1&ipt=c889e1cb878acb1bbd5f6545342e0c02c43200aba936f30eae5edf1fad5e65f2&ipo=images";
      setMeme("Hey look guys I found John Cena!!11!:");
    } else {
      const censoredText = filter.clean(value);
      // makes sure they didn't say anything bad
      if (censoredText.includes("*") || censoredText === "bad word") {
        setIsDisabled(false)
        // it makes fun of them
       meme_img.current.src =
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstayhipp.com%2Fwp-content%2Fuploads%2F2019%2F06%2FIT-clown-.jpg&f=1&nofb=1&ipt=9fccb8c2bda50b42cc59ba2fcc8c9791b24db61634d9d6c4a433e90a040d3ed8&ipo=images";
        setMeme("You rn: 🤡");
      } else {
       meme_img.current.src =
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F8f7a28e62f8242b264c8a39ba8bea261%2Ftenor.gif%3Fitemid%3D15922897&f=1&nofb=1&ipt=fca56bcb03daba99f538b446b3ec274311e249372f002005a77946f8badbb290&ipo=images";
        setMeme("Loading Caption..");
        // Use your own ApiKey
        const configuration = new Configuration({
          apiKey: process.env.REACT_APP_OPENAI
        });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createCompletion({
          model: "text-davinci-002",
          prompt:
            "The following is a conversation with an AI meme maker. The AI is funny, hilarious, original and can make good memes about anything. The AI will replace all swear words, slurs and sexual words with \"No.\" and keep them PG rated.\n\nHuman: Can you make a meme caption about cowboy\nAI: Me before I watch a cowboy film:\nAI: Me after watching a cowboy film:\nHuman: Can you make a meme caption about health\nAI: Me: I'm gonna start eating healthy\nAI: Also me: Treat yourself one last time, you deserve it\nHuman: an you make a meme caption about sleep\nAI: Me: I'm going to bed early tonight\nAlso me: 2am is early enough, right?\nHuman: Can you make a meme caption about cats\nAI: My cat listening to my rants:\nHuman: Can you make a meme caption about cats\nAI: My Keyboard: *Exists* My Cat: It's Free Real Estate\nHuman: Can you make a meme caption about Shrek\nAI: Me: I found a swamp!\nHuman: Can you make a meme caption about school\nAI: When the teacher forgets to check in the homework on the day you actually did it\nHuman: can you make a meme caption about situation\nAI: trying to make a situation better and accidentally making it worse\nHuman: can you make a meme caption about class\nAI: Teacher: \"Guys pay attention!\"\nAI: The kid named attention:\nAI: the rest of the class:\nHuman: can you make a meme caption about joke\nAI: When your friend repeats your joke louder and the whole class laughs.\nHuman: can you make a meme caption about Blimp Academy\nAI: When you do all the work but still credit your team blimpies:\nHuman: Can you create a meme caption about cats\nAI: My cat sleeping through my entire breakdown:\nHuman: Can you create a meme caption about cards\nAI: When the game is rigged and you still end up winning:\nHuman: Can you create a meme caption about mirror\nAI: When you're getting ready for a date and your reflection is questioning you:\nHuman: Can you create a meme caption about teacher\nAI: Teacher: \"I'm going to talk to your parents\"\nYou: \"I'm an orphan, so you can't talk to my parents\"\nHuman: Can you create a meme caption about American Civil War\nAI: You're about to fight for your life but you also want to take a selfie:\nHuman: Can you make a meme caption about " +
            value,
          temperature: 0.9,
          max_tokens: 150,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0.6,
          stop: [" Human:", " AI:"],
        });

        setMeme("Loading Image..");

        // removes the "AI:" part of the value
        const AiResponse = await response.data.choices[0].text.replace(
          "AI: ",
          ""
        );


        // like idk filters i guess?
        const censoredAI = filter.clean(AiResponse);

        let imageMeme;

        await axios
          .get(
            `https://api.serpdog.io/images?api_key=${process.env.REACT_APP_DOGAPI}&q=${censoredText}&gl=us`
          )
          .then((response) => {
            imageMeme = response.data.image_results;
          })
          .catch((error) => {
            console.log(error);
          });

        var randNum = Math.floor(Math.random() * imageMeme.length);
        
        setMeme("" + censoredAI);
        console.log(imageMeme);
         meme_img.current.src = imageMeme[randNum].image;
        setIsDisabled(false)
      }
    }
  };

  return (
    <>
      <h1 className={`Section`} style={{ marginTop: 50 }}>
        Here is za ultimate MEME MAKER!!!
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form  style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }} onSubmit={memeMaker}>
          <label  style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }} >
            <h1 className="meme-ask">
            What is the meme caption about?
</h1>
<br />
            <input
              type="text"
              id="myInput"
              value={value}
              style={{ background: isDisabled ? "#EFEFEF" : "#e8f0fe", border: !isDisabled ? "3px solid #ffc400" : "3px solid #C0C0C0" }}
              disabled={isDisabled}
              placeholder="i.e homework..."
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
          <br />
          {isDisabled ? (
            <button
              type="submit"
              disabled={true}
              id="addBtn"
              style={{ background: "#7D7D7D", border: "3px solid #C0C0C0" }}
            >
              Submit
            </button>
          ) : (
            <motion.button
              type="submit"
              disabled={false}
              whileHover={{
                scale: [1, 1.4, 1.5, 1, 1],
                rotate: [0, 70, -80, 70, 0],
                transition: { duration: 0.3 },
              }}
              id="addBtn"
            >
              Submit
            </motion.button>
          )}
        </form>
        <br />
        <br />
        <div id="meme-container" style={{ background: "white", width: "50%" }}>
          <h1 id="meme" style={{ padding: 5 }}>
            {meme}
          </h1>
          <br />
          <img
            ref={meme_img}
            src={memeImg}
            width="100%"
            id="meme-img"
            alt="meme image"
          />
        </div>
      </div>
    </>
  );
};

export default Meme;
