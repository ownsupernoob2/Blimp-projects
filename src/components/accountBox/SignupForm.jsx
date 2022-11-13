import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { registerInitiate } from "../../store/actions/user";
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

const SignupForm = (props) => {
  const { switchToSignin } = useContext(AccountContext);

  const { error } = useSelector((state) => ({ ...state.error }));
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  let history = useHistory();

  const [isCorrect, setIsCorrect] = useState(true)



  const { displayName, email, password, passwordConfirm } = state;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setIsCorrect(true);
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
       setIsCorrect(false);
      return;
    }
    setIsCorrect(true);
    dispatch(registerInitiate(email, password, displayName));
    history.push("/dashboard")
    setState({ displayName: "", email: "", password: "", passwordConfirm: "" });
 console.log(error)
  };

  return (
    <BoxContainer>
      <FormContainer  onSubmit={handleSubmit}>
      <Input
            type="text"
            id="user-name"
            className="form-control"
            placeholder="Name"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            id="user-email"
            className="form-control"
            placeholder="Email address"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            id="user-pass"
            className="form-control"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            id="user-repeatpass"
            className="form-control"
            placeholder="Confirm Your Password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={handleChange}
            required
          />
        { !isCorrect ? <p  style={{color: "red", paddingTop: 20, fontSize: "15px"}}>The password does not match</p> : null }
      <SubmitButton type="submit">Register</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

export default SignupForm
