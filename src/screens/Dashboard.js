import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addUserInitiate,
  deleteUserInitiate,
  getUserInitiate,
  getUsersInitiate,
  reset,
  updateUserInitiate,
} from "../store/actions/profile";
import { storage } from '../config/fbConfig';

import { logOutInitiate } from "../store/actions/user";

const initialState = {
  name: "",
  profilePic: "",
  contactEmail: "",
  rank: "",
  description: "",
};

const Dashboard = () => {
  const [state, setState] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [Url, setUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);


  //Destructuring
  const { name, profilePic, contactEmail, rank, description } = state;
  const dispatch = useDispatch();
  const  auth =  useSelector((state) => ({ ...state.user }));

  //Because our reducer use with key data
  const { users: justStrings, user: singleUser } = useSelector((state) => state.data);


  
    const asArray = Object.entries(justStrings);
  
  const filtered = asArray.filter(([key, value]) => value.ownerId === auth.user.uid)
  
  const usersFunction = Object.fromEntries(filtered);
  
  const users = Object.values(usersFunction)

  const upload = (e) => {
    var image = e
    if (image == null)
      return;
    setUrl("Getting Download Link...")
  
    // Sending File to Firebase Storage
    storage.ref(`/images/${image.name}`).put(image)
      .on("state_changed", alert("success"), alert, () => {
  
        // Getting Download Link
        storage.ref("images").child(image.name).getDownloadURL()
          .then((url) => {
            setUrl(url);
            setState({ ...state, profilePic: url })
          })
      });
  }

  useEffect(() => {
    const handleDelay = async () => {
      await dispatch(getUsersInitiate());
      console.log("loaded")
    };

    handleDelay();
  }, []);

  useEffect(() => {
    if (singleUser) {
      setState({ ...singleUser });
    }
  }, [singleUser]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logOutInitiate());
  };

  const editProfile = (id) => {
    setEditMode(true);
    setUserId(id);
    dispatch(getUserInitiate(id));
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !profilePic || !contactEmail || !rank || !description ) {
      setErrorMsg("Please fill all input fields");
    } else {
      if (!editMode) {
        dispatch(addUserInitiate(state));
        setState({ name: "", contactEmail: "", profilePic: "", rank: "",  description: "" });
        setErrorMsg("");
      } else {
        dispatch(updateUserInitiate(userId, state));
        setUserId(null);
        setEditMode(false);
        setState({ name: "", contactEmail: "", profilePic: "", rank: "",  description: "" });
        setErrorMsg("");
      }
    }
  };
  return (
    <div style={{display: "flex", flex: 1, justifyContent: "center"}}>
      <div>
        <div>
          <div style={{ marginTop: "100px" }} >
            {users &&
              users.map((item, index) => (
                <figure

          className="card"
          key={index}
        >
          {" "}
          <div className="profile-image">
            <img
              src={item.profilePic}
              className="border-set"
              width="200px"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>{item.name}</h3>
            <h5>{item.rank}</h5>
            <br />
            <p style={{ color: "rgb(255, 255, 255)" }}>
              <font size={-1}>{item.description}</font>
              <br />
              <br />
            </p>
            <div className="icons">
              <a href={"mailto:" + item.contactEmail}>Contact me here!</a>
            </div>
          </figcaption>
        </figure>
              
              ))}
          </div>
        </div>
        <div md="4">
        {!editMode ?       <button onClick={() =>  editProfile(users[0].id)}>Edit Your Profile</button> : 
          <>
          <form onSubmit={handleSubmit}>
            <div className="text-start" variant="h4">
              Edit your Profile
            </div>
            {errorMsg && (
              <h6 className="text-start" style={{ color: "red" }}>
                {errorMsg}
              </h6>
            )}
            <h4>Your name</h4>
            <input
              label="Name"
              value={name || ""}
              name="name"
              type="text"
              onChange={handleInputChange}
            />
            <br />
            <h4>Image link</h4>
            <input
              label="ProfilePic"
              value={profilePic || ""}
              name="profilePic"
              type="text"
              onChange={handleInputChange}
            />
         
            {/* <center>
       <input type="file"    label="User" name="profilePic" onChange={(e)=>{ upload(e.target.files[0])}}/>
      <button onClick={upload}>Upload</button> 
      </center> */}
            <br />
            <h4>IYour contact email</h4>
            <input
              label="Email"
              value={contactEmail || ""}
              name="contactEmail"
              type="email"
              onChange={handleInputChange}
            />
            <br />
            <h4>Your posistion</h4>
            <input
              label="Rank"
              value={rank || ""}
              name="rank"
              type="text"
              onChange={handleInputChange}
            />
            <h4>About you</h4>
            <input
              label="Description"
              value={description || ""}
              name="description"
              type="text"
              onChange={handleInputChange}
            />
         
            <br />
            <button
              style={{ width: "100px" }}
              color={!editMode ? "success" : "warning"}
              type="submit"
            >
              Update
            </button>
          </form>
            <button
              style={{ width: "100px" }}
              color={() => {editMode(false)}}
              type="submit"
            >
              Cancel
            </button>
            </>
        }
        </div>
      <button onClick={handleLogout}>Log out</button>
      </div>
        
    </div>
  );
};

export default Dashboard;