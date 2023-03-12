import { SET_AUTH_TOKENS, SET_AUTH_USER } from "../../constants/actionTypes";

const initialState = {
    access_token: undefined,
    user: undefined
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                user: action.payload.user
            };
        case SET_AUTH_TOKENS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export function isAuthenticated(state) {
    return state.auth.access_token !== undefined
}


