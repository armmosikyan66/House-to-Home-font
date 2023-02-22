import {IUser} from "../../utils/types/IUser";
import {ActionTypes} from "../types/IUser";

export const setUser = (payload: IUser) => ({payload, type: ActionTypes.SET_USER});