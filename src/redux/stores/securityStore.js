import {combineReducers} from "redux";
import messageReducer from "../slices/security/AuthMessageSlice";
import authReducer from "../slices/security/AuthSlice";

const securityStore = combineReducers(
    {
        auth: authReducer,
        message: messageReducer
    }
)

export default securityStore;