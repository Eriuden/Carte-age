import { CONNECT_USER, LOGOUT_USER } from "./actions-types";


export const ConnectUser = (user) => {

    return function(dispatch){
        
        dispatch({
            type: CONNECT_USER,
            payload: user
        })
    }
}

export const logoutUser = () => {
    return function(dispatch){
        dispatch({
            type: LOGOUT_USER,
            payload: null
        })
    }
}