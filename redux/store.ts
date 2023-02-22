import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from "./reducers";
import {createWrapper} from "next-redux-wrapper";

export const makeStore = () => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const store = makeStore();
export const wrapper = createWrapper(makeStore)