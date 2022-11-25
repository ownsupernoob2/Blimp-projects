import * as types from '../actions/actionTypes';


const initialState = {
    users: [],
    user: {},
    loading: true
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
            case types.GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
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