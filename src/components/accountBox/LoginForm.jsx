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

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
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
      <SubmitButton type="submit">Login</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <div onClick={handleGoogleSignIn} class='g-sign-in-button'>
    <div class='content-wrapper'>
        <div class='logo-wrapper'>
            <img src='https://developers.google.com/identity/images/g-logo.png' />
        </div>
        <span class='text-container'>
      <span>Sign in with Google</span>
    </span>
    </div>
</div>
      <Marginer direction="vertical" margin="1.6em" />
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>

           
    </BoxContainer>
  );
}

export default LoginForm
