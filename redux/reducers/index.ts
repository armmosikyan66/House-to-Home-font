import {combineReducers} from "redux";
import auth from "./user";

const RootReducer = combineReducers({
    auth,
})

export default RootReducer;