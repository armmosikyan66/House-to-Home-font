import {combineReducers} from "redux";
import auth from "./user";
import product from './product'

const RootReducer = combineReducers({
    auth,
    product
})

export default RootReducer;