import React, { useContext, useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  googleSignInInitiate,
  loginInitiate,
} from "../../store/actions/user";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";

import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

const LoginForm = () => {
  
  const { switchToSignup } = useContext(AccountContext);

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
    <BoxContainer>
      <FormContainer  onSubmit={handleSubmit}>
      <Input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            value={email}
            name="email"
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            value={password}
            name="password"
            onChange={handleChange}
            required
          />
      <SubmitButton type="submit">Signin</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">s
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
        <button
              className="btn google-btn social-btn"
              type="button"
              onClick={handleGoogleSignIn}
            >
              <span>
                <i className="fab fa-google-plus-g"></i> Sign in with Google
              </span>{" "}
            </button>
           
    </BoxContainer>
  );
}

export default LoginForm
