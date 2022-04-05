import { initialUserState, UserAction, IUserState, UserActionTypes } from "types/user";


export const userReducer = (state = initialUserState, action: UserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return { loading: true, error: null, user: state.user};
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {loading: false, error: null, user: action.payload};
        case UserActionTypes.FETCH_USER_ERROR:
            return {loading: false, error: action.payload, user: state.user};
        case UserActionTypes.FETCH_USER_LOGOUT:
            return {loading: false, error: null, user: initialUserState.user}
        default:
            return state
    }

}