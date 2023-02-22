import {IUser} from "../../utils/types/IUser";

export type InitialStateTypes = {
    user: IUser,
    isAuth: boolean,
}

export enum ActionTypes {
    SET_USER = "SET_USER",
    REMOVE_USER = "REMOVE_USER",
}

export type Action =
    {
        type: ActionTypes.SET_USER, payload: IUser
    } | {
    type: ActionTypes.REMOVE_USER, payload: IUser
}