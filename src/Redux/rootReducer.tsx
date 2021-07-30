import {counterReducer} from "./reducers/counterReducer";
import {combineReducers} from "redux";
import {customerReducer} from "./reducers/customerReducer";

export const reducer=combineReducers({counter: counterReducer, customer:customerReducer})