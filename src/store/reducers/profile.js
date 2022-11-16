import * as types from '../actions/actionTypes';


const initialState = {
    users: [],
    user: {}
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
            };
            case types.GET_USER:
            return {
                ...state,
                user: action.payload,
            };
            case types.RESET:
                return {
                    ...state,
                    user: {},
                }
        default:
            return state;
    }
}

export default userReducer;