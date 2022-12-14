import React, { useContext, useState, useEffect } from "react";
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


  const dispatch = useDispatch();


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
      <SubmitButton type="submit">Sign In</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <button
              className="btn google-btn social-btn"
              type="button"
              onClick={handleGoogleSignIn}
            >
              <span>
                <i className="fab fa-google-plus-g"></i> Sign in with Google
              </span>
            </button>
      <Marginer direction="vertical" margin="1.6em" />
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign Up
        </BoldLink>
      </MutedLink>

           
    </BoxContainer>
  );
}

export default LoginForm
