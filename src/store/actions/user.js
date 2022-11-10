import * as types from "./actionTypes";
import { auth, googleAuthProvider } from "../../config/fbConfig";


const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = ({ user, additionalData }) => ({
  type: types.REGISTER_SUCCESS,
  payload: { user, additionalData },
});

const registerError = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginError = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const googleSignInStart = () => ({
  type: types.GOOGLE_SIGN_IN_START,
});

const googleSignInSuccess = (user) => ({
  type: types.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

const googleSignInFail = (error) => ({
  type: types.GOOGLE_SIGN_IN_FAIL,
  payload: error,
});

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutError = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const setuser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

export const setBasketEmpty = () => ({
  type: types.SET_BASKET_EMPTY,
});

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        // user.displayName = displayName;
        // dispatch(registerSuccess({ user, additionalData: { displayName } }));
        user.updateProfile({
          displayName,
        });
        dispatch(registerSuccess({ user, additionalData: { displayName } }));
      })
      .catch((error) => dispatch(registerError(error.message)));
  };
};

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginError(error.message)));
  };
};

export const googleSignInInitiate = () => {
  return function (dispatch) {
    dispatch(googleSignInStart());
    auth
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSignInSuccess(user));
      })
      .catch((error) => dispatch(googleSignInFail(error.message)));
  };
};


export const logOutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((resp) => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutError(error.message)));
  };
};
