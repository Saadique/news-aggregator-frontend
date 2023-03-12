import { SET_AUTH_USER, SET_AUTH_TOKENS } from "../../constants/actionTypes"

export const setAuthUser = (user) => {
    return {
        type: SET_AUTH_USER,
        payload: {
            user: user
        }
    }
}

export const setAuthTokens = (tokens) => {
    return {
        type: SET_AUTH_TOKENS,
        payload: {
            access_token: tokens.access_token 
        }
    }
}