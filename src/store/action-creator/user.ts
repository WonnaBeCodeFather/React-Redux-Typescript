import { UserAction, UserActionTypes } from './../../types/user';
import axios from "axios"
import { Dispatch } from "react"


export const FetchUserData = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USER})
            const response = await axios({
                url: "http://127.0.0.1:8000/user/self-user",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data})
        } catch {
            dispatch({type: UserActionTypes.FETCH_USER_ERROR, payload: "Wrong Username or Password"})
            
        }
    }
}