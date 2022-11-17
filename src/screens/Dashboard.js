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
import { logOutInitiate } from "../store/actions/user";

const initialState = {
  name: "",
  profilePic: "",
  contactEmail: "",
  rank: "",
};

const Dashboard = () => {
  const [state, setState] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  //Destructuring
  const { name, profilePic, contactEmail, rank } = state;
  const dispatch = useDispatch();
  const  auth =  useSelector((state) => ({ ...state.user }));

  //Because our reducer use with key data
  const { users: justStrings, user: singleUser } = useSelector((state) => state.data);

  
    const asArray = Object.entries(justStrings);
  
  const filtered = asArray.filter(([key, value]) => value.ownerId === auth.user.uid)
  
  const usersFunction = Object.fromEntries(filtered);
  
  const users = Object.values(usersFunction)

  

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
    if (!name || !rank || !contactEmail || !rank) {
      setErrorMsg("Please fill all input fields");
    } else {
      if (!editMode) {
        dispatch(addUserInitiate(state));
        setState({ name: "", contactEmail: "", profilePic: "", rank: "" });
        setErrorMsg("");
      } else {
        dispatch(updateUserInitiate(userId, state));
        setUserId(null);
        setEditMode(false);
        setState({ name: "", contactEmail: "", profilePic: "", rank: "" });
        setErrorMsg("");
      }
    }
  };
  return (
    <div >
      <div>
        <div>
          <div style={{ marginTop: "100px" }} >
            {users &&
              users.map((item, index) => (
                <div key={index}>
                    <h4>{item.name}</h4>
                    <img src={item.profilePic} />
                    <h4>{item.contactEmail}</h4>
                    <h4>{item.rank}</h4>
                </div>
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

            <input
              label="Name"
              value={name || ""}
              name="name"
              type="text"
              onChange={handleInputChange}
            />
            <br />
            <input
              label="User"
              value={profilePic || ""}
              name="profilePic"
              type="text"
              onChange={handleInputChange}
            />
            <br />
            <input
              label="Email"
              value={contactEmail || ""}
              name="contactEmail"
              type="email"
              onChange={handleInputChange}
            />
            <br />
            <input
              label="Rank"
              value={rank || ""}
              name="rank"
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
      </div>
        
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Dashboard;