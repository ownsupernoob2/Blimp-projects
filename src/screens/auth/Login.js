import React, { useState, useEffect } from "react";
import {
  googleSignInInitiate,
  loginInitiate,
} from "../../store/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

const Login = () => {
  const { user } = useSelector((state) => ({ ...state.user }));
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate());
  };


  return (
    <div>
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            {" "}
            Sign in
          </h1>
          <div className="social-login">
            <button
              className="btn google-btn social-btn"
              type="button"
              onClick={handleGoogleSignIn}
            >
              <span>
                <i className="fab fa-google-plus-g"></i> Sign in with Google+
              </span>{" "}
            </button>
           
          </div>
          <p style={{ textAlign: "center" }}> OR </p>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            value={email}
            name="email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            value={password}
            name="password"
            onChange={handleChange}
            required
          />

          <button className="btn btn-secondary btn-block" type="submit">
            <i className="fas fa-sign-in-alt"></i> Sign in
          </button>
          <hr />
          <p>Don't have an account!</p>
          <Link to="/register">
            <button
              className="btn btn-primary btn-block"
              type="button"
              id="btn-signup"
            >
              <i className="fas fa-user-plus"></i> Sign up New Account
            </button>
          </Link>
        </form>

        <br />
      </div>
    </div>
  );
};

export default Login;
