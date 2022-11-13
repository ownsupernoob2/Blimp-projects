import React, { useContext, useState } from "react";
import { useDispatch,  useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

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
  let history = useHistory();

  const { error } = useSelector((state) => ({ ...state.error }));
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

  const handleSubmit =  (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
    console.log(error)
    history.push("/dashboard")
  };

  const handleGoogleSignIn =  (e) => {
    e.preventDefault();
   dispatch(googleSignInInitiate())
    console.log(error)
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
      <div onClick={handleGoogleSignIn} className='g-sign-in-button'>
    <div className='content-wrapper'>
        <div className='logo-wrapper'>
            <img src='https://developers.google.com/identity/images/g-logo.png' />
        </div>
        <span className='text-container'>
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
