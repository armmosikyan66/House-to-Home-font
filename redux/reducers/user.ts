import {Action, ActionTypes, InitialStateTypes} from "../types/IUser";
import {IUser} from "../../utils/types/IUser";

const initialState: InitialStateTypes = {
    user: {} as IUser,
    isAuth: false,
}

const UserReducer = (state = initialState, action: Action): InitialStateTypes => {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        case  ActionTypes.REMOVE_USER:
            return {
                ...state,
                user: {} as IUser,
                isAuth: false
            }
        default:
            return state;
    }
}

export default UserReducer;