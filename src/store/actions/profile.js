import * as types from './actionTypes';
import { db } from '../../config/fbConfig';



const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
})

const addUser = () => ({
    type: types.ADD_USER
})

const deleteUser = () => ({
    type: types.DELETE_USER
})

const updateUser = () => ({
    type: types.UPDATE_USER
})

const getUser = (user) => ({
    type: types.GET_USER,
    payload: user
})
 
export const reset = () => ({
    type:types.RESET
})
 

export const getUsersInitiate = () => {
    return function(dispatch){
        db.collection("users").onSnapshot((querySnapshot) => {
            const users = [];
            querySnapshot.forEach((doc) => {
                users.push({...doc.data(), id:doc.id})
            })
            dispatch(getUsers(users));
        })
    }
}

export const addUserInitiate = (user) => {
    //Using dispatch beacause we are using redux thunk
    return function(dispatch) {
     db.collection("users").doc().set(user);
     dispatch(addUser());
    }
}

export const deleteUserInitiate = (id) => {
    //Using dispatch beacause we are using redux thunk
    return function(dispatch) {
     db.collection("users").doc(id).delete();
     dispatch(deleteUser());
    }
}


export const updateUserInitiate = (id, user) => {
    //Using dispatch beacause we are using redux thunk
    return function(dispatch) {
     db.collection("users").doc(id).update(user);
     dispatch(updateUser());
    }
}


export const getUserInitiate = (id) => {
    //Using dispatch beacause we are using redux thunk
    return function(dispatch) {
     db.collection("users").doc(id).get().then((user) => {
         dispatch(getUser({...user.data()}));
     }).catch(error => console.log(error))
    }
}