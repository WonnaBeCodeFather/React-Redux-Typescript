interface IUSER {
    username: string,
    id: null | number,
    is_admin: boolean
    }


export interface IUserState {
    user: IUSER;
    loading: boolean;
    error: null | string;
    }

export enum UserActionTypes {
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR",
    FETCH_USER_LOGOUT = "FETCH_USER_LOGOUT"
    }
  
interface FetchUserLogout {
    type: UserActionTypes.FETCH_USER_LOGOUT;
    payload: IUSER;
    }
  
interface FetchUserAction {
    type: UserActionTypes.FETCH_USER;
    }
  
interface FetchUserSuccess {
    type: UserActionTypes.FETCH_USER_SUCCESS
    payload: IUSER;
    }
  
interface FetchUserError {
    type: UserActionTypes.FETCH_USER_ERROR;
    payload: string;
    }

export const initialUserState: IUserState = {
    user: {
        username: "",
        id: null,
        is_admin: false
        },
    loading: false,
    error: null
    }
    
export type UserAction = 
FetchUserAction 
| FetchUserSuccess 
| FetchUserError 
| FetchUserLogout